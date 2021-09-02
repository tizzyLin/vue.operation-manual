<template>
    <div tabindex="-1" style="border-radius: 4px; min-width: 16em; word-break: break-word;">
        <div class="normal_border" style="padding: 0.5em 0; position: relative;">
            <div @click.stop="guide_selector_show = !guide_selector_show" class="title" style="cursor: pointer; padding: 0 0.8em;">{{ title }}</div>
            <transition name="normal_transition">
                <div v-show="guide_selector_show" class="guide_selector normal_border" style="padding: 0.5em 0; width: 100%;">
                    <div v-for="guide_tpl in guide_tpls" v-if="!guide_tpl.hidden" @click="newGuide(guide_tpl)" class="guide_tpl_option">{{ guide_tpl.title }}</div>
                </div>
            </transition>
        </div>
        <transition-group name="normal_transition" tag="div">
            <div v-for="guide in value" :key="guide.id" class="normal_border" style="margin-top: 0.5em;">
                <div style="border-bottom: 1px solid #d7d7d7; padding: 0.5em 0.8em 0.3em;">
                    <tooltip :placement="guide_tpls_map[guide.type].desc ? desc_placement : 'none'" style="width: 100%;">
                        <div slot="tip" v-if="guide_tpls_map[guide.type].desc" class="desc" style="width: 100%;">
                            {{ guide_tpls_map[guide.type].desc }}
                        </div>
                        <div class="title" style="float: left; width: calc(100% - 4em);">{{ guide_tpls_map[guide.type].title }}</div>
                        <div style="float: right; font-size: 1.1em">
                            <template v-if="guide_tpls_map[guide.type].allow_undo">
                                <div @click="undo(guide)" style="display: inline-block; margin-left: 0.1em;">
                                    <Icon type="md-undo" :disabled="guide.version === 0" title="undo" style="cursor: pointer;"></Icon>
                                </div>
                                <div v-if="guide_tpls_map[guide.type].allow_redo" @click="redo(guide)" style="display: inline-block; margin-left: 0.1em;">
                                    <Icon type="md-redo" :disabled="guide.version >= guide.histories.length" title="redo" style="cursor: pointer;"></Icon>
                                </div>
                            </template>
                            <div @click="removeGuide(guide)" style="display: inline-block; margin-left: 0.1em;">
                                <Icon type="md-close" title="remove" style="cursor: pointer;"></Icon>
                            </div>
                        </div>
                    </tooltip>
                </div>
                <!--                <transition-group name="task_transition" tag="div" style="padding: 0.2em 0.8em;">-->
                <transition-group tag="div" class="tasks" v-bind:css="false"
                                  v-on:enter="transitionTaskEnter" v-on:leave="transitionTaskLeave">
                    <div v-for="task in guide.tasks" :key="task.id" v-if="task.state=='active'" class="task">
                        <tooltip :placement="task.desc ? desc_placement : 'none'" style="width: 100%;">
                            <div slot="tip" v-if="task.desc" class="desc" style="width: 100%;">{{ task.desc }}</div>

                            <div class="title" style="display: table-cell;width: 100%;">{{ task.title }}</div>
                            <div style="display: table-cell; line-height: 1em; margin-left: 0.5em; white-space: nowrap;">
                                <div v-if="task_tpls_map[task.type].show_do_button" @click="onTaskDoClick(guide, task)" class="normal_border"
                                     style="cursor: pointer; padding: 0.5em 1em; text-align: center; font-size: 0.8em; background-color: #277FFF; border-color: #277FFF; color: white;">
                                    {{ task_tpls_map[task.type].do_button_title }}
                                </div>
                                <div v-if="task_tpls_map[task.type].show_done_button" @click="onTaskDoneClick(guide, task)"
                                     style="cursor: pointer; padding: 0.2em 1em 0; text-align: center; font-size: 0.8em; color: #277FFF;">
                                    {{ task_tpls_map[task.type].done_button_title }}
                                </div>
                            </div>
                        </tooltip>
                    </div>
                </transition-group>
            </div>
        </transition-group>
    </div>
</template>
<script>
import {v1 as uuid} from 'uuid';
import Tooltip from './Tooltip';
import Icon from './Icon';
import Velocity from 'velocity-animate';

export default {
  name: 'Manual',
  components: {
    Tooltip,
    Icon,
  },
  props: {
    value: Array,
    title: {
      type: String,
      default: 'Operation manual',
    },
    guide_tpls: Array,
    task_tpls: Array,
    desc_placement: {
      type: String,
      default: 'top-start',
    },
    filterable: {
      type: Boolean,
      default: true,
    },
    debug: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      guide_selector_show: false,
      show_desc: null,
    };
  },
  computed: {
    guide_tpls_map() {
      let map = {};
      this.guide_tpls.forEach(guide_tpl => {
        this.$set(map, guide_tpl.type, guide_tpl);
      });
      return map;
    },
    task_tpls_map() {
      let map = {};
      this.task_tpls.forEach(task_tpl => {
        this.$set(map, task_tpl.type, task_tpl);
      });
      return map;
    },
  },
  created() {
    // region 矫正、检查入参
    let guide_tpl_cfg = {
      type: {required: true, default: '', types: ['string']},
      title: {required: true, default: '', types: ['string']},
      desc: {required: false, default: '', types: ['string']},
      start_task_types: {required: true, default: [], types: ['array'], type_desc: "an array of task type"},
      start_task_inputs: {required: false, default: {}, types: ['object']},
      hidden: {required: false, default: false, types: ['boolean']},
      allow_undo: {required: false, default: true, types: ['boolean']},
      allow_redo: {required: false, default: true, types: ['boolean']},
      beforeRemove: {required: false, default: () => {return true;}, types: ['function']},
    };
    this.guide_tpls.forEach(guide_tpl => {
      Object.keys(guide_tpl_cfg).forEach(k => {
        let required = guide_tpl_cfg[k].required;
        let default_val = guide_tpl_cfg[k].default;
        if (!guide_tpl.hasOwnProperty(k)) {
          if (required) {
            console.error(`OperationManual: ${k} is required`, guide_tpl);
          }
          this.$set(guide_tpl, k, default_val);
        }

        let types = guide_tpl_cfg[k].types;
        if (types) {
          let type_valid = false;
          for (let type of types) {
            if (this.checkType(guide_tpl[k], type)) {
              type_valid = true;
              break;
            }
          }

          if (!type_valid) {
            let type_desc = guide_tpl_cfg[k].type_desc;
            if (!type_desc) type_desc = types.join(' or ');
            console.error(`OperationManual: ${k} must be ${type_desc}`, guide_tpl);
          }
        }
      });
    });
    let task_tpl_cfg = {
      type: {required: true, default: '', types: ['string']},
      title: {required: true, default: '', types: ['string', 'function'], type_desc: 'string or a function return string'},
      desc: {required: false, default: '', types: ['string', 'function'], type_desc: 'string or a function return string'},
      required_inputs: {required: false, default: [], types: ['array']},
      required_outputs: {required: false, default: [], types: ['array']},
      show_do_button: {required: false, default: false, types: ['boolean']},
      show_done_button: {required: false, default: true, types: ['boolean']},
      done_button_title: {required: false, default: 'Done', types: ['string']},
      do_button_title: {required: false, default: 'Do it', types: ['string']},
      next_tasks: {required: false, default: [], types: ['array', 'function'], type_desc: 'an array of task type, or a function return an array of task type, e.g., [{type: "add_row"}]'},
      onDoClick: {required: false, default: () => {}, types: ['function']},
      onDoneClick: {required: false, default: ({output}) => {output();}, types: ['function']},
      beforeActive: {required: false, default: () => {}, types: ['function']},
      beforeComplete: {required: false, default: () => {}, types: ['function']},
      beforeUndoEnter: {required: false, default: () => {}, types: ['function']},
      beforeUndoLeave: {required: false, default: () => {}, types: ['function']},
      beforeRedoEnter: {required: false, default: () => {}, types: ['function']},
      beforeRedoLeave: {required: false, default: () => {}, types: ['function']},
    };
    this.task_tpls.forEach(task_tpl => {
      Object.keys(task_tpl_cfg).forEach(k => {
        let required = task_tpl_cfg[k].required;
        let default_val = task_tpl_cfg[k].default;
        if (!task_tpl.hasOwnProperty(k)) {
          if (required) {
            console.error(`OperationManual: ${k} is required`, task_tpl);
          }
          this.$set(task_tpl, k, default_val);
        }

        let types = task_tpl_cfg[k].types;
        if (types) {
          let type_valid = false;
          for (let type of types) {
            if (this.checkType(task_tpl[k], type)) {
              type_valid = true;
              break;
            }
          }

          if (!type_valid) {
            let type_desc = task_tpl_cfg[k].type_desc;
            if (!type_desc) type_desc = types.join(' or ');
            console.error(`OperationManual: ${k} must be ${type_desc}`, task_tpl);
          }
        }
      });
    });
    // endregion

    this.value.forEach(guide => {
      if (!this.guide_tpls_map.hasOwnProperty(guide.type)) {
        this.value.splice(this.value.findIndex((v) => {return v === guide;}), 1);
      }
    });

    window.addEventListener('click', this.hideGuideSelector);
  },
  beforeDestroy() {
    window.removeEventListener('click', this.hideGuideSelector);
  },
  methods: {
    hideGuideSelector() {
      this.guide_selector_show = false;
    },
    // region用户触发动作，task的更改需要记录日志
    onTaskDoClick(guide, task) {
      this.getLockDo(guide, () => {
        let task_tpl = this.task_tpls_map[task.type];
        task_tpl.onDoClick({
          inputs: {...task.inputs},
          output: (params) => {
            this.tryCompleteTask(guide, task, params);
          },
        });
      });
    },
    onTaskDoneClick(guide, task) {
      this.getLockDo(guide, () => {
        let task_tpl = this.task_tpls_map[task.type];
        task_tpl.onDoneClick({
          inputs: {...task.inputs},
          output: (params) => {
            this.tryCompleteTask(guide, task, params)
          },
        });
      });
    },
    async newGuide(guide_tpl) {
      let new_guide = {
        id: uuid(),
        type: guide_tpl.type,
        histories: [],
        version: 0,
        tasks: [],
        lock: false,
      }
      for (let task_type of guide_tpl.start_task_types) {
        let task = this.newTask(task_type);
        task.inputs = {...guide_tpl.start_task_inputs};
        task.state = 'inactive';
        if (this.isTaskInputsFilled(task)) {
          await this.beforeTaskActive(task);
          task.state = 'active';
        }
        new_guide.tasks.push(task);
      }
      this.value.push(new_guide);
      this.guide_selector_show = false;
    },
    undo(guide) {
      this.waitLockDo(guide, async () => {
        if (guide.version === 0) {
          return;
        }
        let log = JSON.parse(JSON.stringify(guide.histories[guide.version - 1]));
        Object.keys(log).forEach(task_id => {
          Object.keys(log[task_id].new).forEach(k => {
            log[task_id].new[k] = JSON.parse(log[task_id].new[k]);
            log[task_id].old[k] = JSON.parse(log[task_id].old[k]);
          });
        });
        let seq = [];
        // 排序，为了能先执行 任务结束 的操作
        Object.keys(log).forEach(task_id => {
          if (log[task_id].new.state === 'active') {
            seq.unshift(task_id);
          } else {
            seq.push(task_id);
          }
        });
        for (let task_id of seq) {
          let task = guide.tasks.find(fe_task => {return task_id === fe_task.id});
          let task_tpl = this.task_tpls.find(fe_task_tpl => {return task.type === fe_task_tpl.type});
          if (log[task_id].new.state === 'active') {
            task_tpl.beforeUndoLeave({inputs: log[task_id].new.hasOwnProperty('inputs') ? log[task_id].new['inputs'] : {...task.inputs}});
          } else {
            task_tpl.beforeUndoEnter({outputs: log[task_id].new.hasOwnProperty('outputs') ? log[task_id].new['outputs'] : {...task.outputs}});
          }
          Object.keys(log[task_id].old).forEach(k => {
            this.$set(task, k, log[task_id].old[k]);
          });
        }
        guide.version--;
      })
    },
    redo(guide) {
      this.waitLockDo(guide, async () => {
        if (guide.version >= guide.histories.length) {
          return;
        }
        let log = JSON.parse(JSON.stringify(guide.histories[guide.version]));
        Object.keys(log).forEach(task_id => {
          Object.keys(log[task_id].new).forEach(k => {
            log[task_id].new[k] = JSON.parse(log[task_id].new[k]);
            log[task_id].old[k] = JSON.parse(log[task_id].old[k]);
          });
        });
        let seq = [];
        // 排序，为了能先执行 任务结束 的操作
        Object.keys(log).forEach(task_id => {
          if (log[task_id].old.state === 'active') {
            seq.unshift(task_id);
          } else {
            seq.push(task_id);
          }
        });
        for (let task_id of seq) {
          let task = guide.tasks.find(fe_task => {return task_id === fe_task.id});
          let task_tpl = this.task_tpls.find(fe_task_tpl => {return task.type === fe_task_tpl.type});
          if (log[task_id].old.state === 'active') {
            task_tpl.beforeRedoLeave({outputs: log[task_id].new.hasOwnProperty('outputs') ? log[task_id].new['outputs'] : {...task.outputs}});
          } else {
            task_tpl.beforeRedoEnter({inputs: log[task_id].new.hasOwnProperty('inputs') ? log[task_id].new['inputs'] : {...task.inputs}});
          }
          Object.keys(log[task_id].new).forEach(k => {
            this.$set(task, k, log[task_id].new[k]);
          });
        }
        guide.version++;
      });
    },
    async removeGuide(guide) {
      let guide_tpl = this.guide_tpls_map[guide.type];
      let rs = await this.call(guide_tpl.beforeRemove);
      if (!rs) {
        return;
      }

      let idx = this.value.findIndex(fe_guide => {
        return fe_guide.id === guide.id;
      });
      this.value.splice(idx, 1);
    },
    // endregion
    // region业务触发动作，task的更改需要记录日志
    async tryCompleteTask(guide, task, params) {
      // 完成任务并生成下一步任务
      await this.waitLockDo(guide, async () => {
        if (task.state !== 'active') {
          return;
        }
        let task_tpl = this.task_tpls_map[task.type];
        let outputs = {...task.outputs};
        if (typeof params === 'object') {
          Object.keys(params).forEach((k) => {
            this.$set(outputs, k, params[k]);
          });
        }

        let log = this.editTask(task, 'outputs', outputs);
        let output_filled = true;
        task_tpl.required_outputs.forEach(k => {
          if (!task.outputs.hasOwnProperty(k)) {
            output_filled = false;
          }
        });

        if (!output_filled) {
          console.error('not enough output', task_tpl.required_outputs, {...task.outputs})
          return;
        }

        await this.call(task_tpl.beforeComplete, [{
          outputs: {...task.outputs},
        }]);
        let next_tasks_cfg = task_tpl.next_tasks;
        if (this.isFunction(next_tasks_cfg)) {
          next_tasks_cfg = await this.call(next_tasks_cfg, [{outputs: task.outputs}]);
        }
        if (!this.isArray(next_tasks_cfg)) {
          next_tasks_cfg = [];
          if (this.debug) {
            console.error('next_tasks expect get an array of task, e.g., [{type: "add_row"}]', next_tasks_cfg);
          }
        }

        let next_tasks = [];
        for (let next_task_cfg of next_tasks_cfg) {
          let next_task;
          if (next_task_cfg.id) {
            next_task = guide.tasks.find(fe_task => {
              return fe_task.id === next_task_cfg.id
            });
          }

          if (!next_task) {
            next_task = this.newTask(next_task_cfg.type);
            next_tasks.push(next_task);
          }

          if (next_task_cfg.id) next_task.id = next_task_cfg.id;
          let inputs = {...next_task.inputs};
          Object.keys(task.outputs).forEach(k => {
            inputs[k] = task.outputs[k];
          });

          this.editTask(next_task, 'inputs', inputs, log);
          if (this.isTaskInputsFilled(next_task)) {
            await this.beforeTaskActive(next_task);
            this.editTask(next_task, 'state', 'active', log);
          } else {
            this.editTask(next_task, 'state', 'inactive', log);
          }
        }

        this.editTask(task, 'state', 'done', log);
        next_tasks.forEach(next_task => {
          guide.tasks.push(next_task);
        });
        this.tryEndGuide(guide);
        this.writeGuideLog(guide, log);
      });
    },
    // endregion
    tryEndGuide(guide) {
      let unexpected_states = ['active', 'inactive'];
      let unexpected_task = guide.tasks.find(fe_task => {
        return unexpected_states.indexOf(fe_task.state) > -1
      });
      if (unexpected_task) {
        return;
      }

      let idx = this.value.findIndex(fe_guide => {
        return fe_guide.id === guide.id;
      });
      this.value.splice(idx, 1);
    },
    isTaskInputsFilled(task) {
      let task_tpl = this.task_tpls_map[task.type];
      if (!this.isArray(task_tpl.required_inputs)) {
        return true;
      }

      let input_filled = true;
      task_tpl.required_inputs.forEach(k => {
        if (!task.inputs.hasOwnProperty(k)) {
          input_filled = false;
        }
      });
      return input_filled;
    },
    editTask(task, col, new_val, log) {
      if (log === undefined) {
        log = {};
      }

      if (!log.hasOwnProperty(task.id)) {
        log[task.id] = {
          old: {},
          new: {}
        };
      }
      let task_log = log[task.id];
      if (!task_log.old.hasOwnProperty(col)) {
        task_log.old[col] = JSON.stringify(task[col]);
      }
      task_log.new[col] = JSON.stringify(new_val);
      task[col] = new_val;
      return log;
    },
    writeGuideLog(guide, log) {
      guide.histories.splice(guide.version)
      guide.histories.push(log);
      guide.version += 1;
    },
    async beforeTaskActive(task) {
      let task_tpl = this.task_tpls_map[task.type];
      if (this.isFunction(task_tpl.title)) {
        task.title = await this.call(task_tpl.title, [{inputs: {...task.inputs}}]);
      } else {
        task.title = task_tpl.title;
      }
      if (this.isFunction(task_tpl.desc)) {
        task.desc = await this.call(task_tpl.desc, [{inputs: {...task.inputs}}]);
      } else {
        task.desc = task_tpl.desc;
      }

      await this.call(task_tpl.beforeActive, [{inputs: {...task.inputs}}]);
    },
    newTask(type) {
      return {
        id: uuid(),
        type,
        title: '',
        desc: '',
        state: 'disabled',
        inputs: {},
        outputs: {},
      };
    },
    async getLockDo(guide, callback) {
      if (guide.lock) return;
      this.$set(guide, 'lock', true);
      await this.call(callback);
      this.$set(guide, 'lock', false);
    },
    async waitLockDo(guide, callback) {
      while (guide.lock) await this.sleep(0.2);
      this.$set(guide, 'lock', true);
      await this.call(callback);
      this.$set(guide, 'lock', false);
    },
    // region transition
    async transitionTaskEnter(el, done) {
      el.style.opacity = '0';
      el.style.height = '10em';
      el.attributes.height = el.children[0].offsetHeight + 6;
      el.style.height = '0';
      Velocity(
        el,
        {opacity: 1, height: el.attributes.height, translateX: ['0em', '3em'], scaleX: ['1', '0.7'], scaleY: ['1', '0']},
        {duration: 500, complete: done}
      )
    },
    transitionTaskLeave(el, done) {
      let height = el.children[0].offsetHeight + 6;
      Velocity(
        el,
        {opacity: '0', height: ['0', height], translateX: ['-3em', '0em'], scaleX: ['0.7', '1'], scaleY: ['0', '1']},
        {duration: 500, complete: done}
      )
    },
    // endregion
    // region utils
    asyncNextTick() {
      return new Promise((resolve, reject) => {
        this.$nextTick(() => {
          resolve();
        });
      });
    },
    sleep(second) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, second * 1000);
      });
    },
    checkType(v, type) {
      switch (type) {
        case 'string':
        case 'boolean':
        case 'object':
        case 'function':
          return typeof v === type;
        case 'array':
          return this.isArray(v);
      }
    },
    isArray(v) {
      return (typeof v === 'object') && v.constructor.name === 'Array';
    },
    isFunction(v) {
      return typeof v === 'function';
    },
    async call(func, params) {
      if (params === undefined) params = [];
      let rs = func(...params);
      if (typeof rs === 'object' && rs.constructor.name === 'Promise') {
        rs = await rs;
      }

      return rs;
    },
    // endregion
  }
}
</script>

<style scoped>
.title {
    line-height: 1.8em;
}

.normal_border {
    border-radius: 4px;
    border: 1px #d7d7d7 solid;
    box-shadow: 0 1px 2px rgb(0 0 0 / 20%);
}

.guide_selector {
    text-align: left;
    background-color: #fff;
    color: #515a6e;
    height: max-content;
    position: absolute;
    z-index: 2;
}

.guide_tpl_option {
    cursor: pointer;
    padding: 0 0.8em;
}

.guide_tpl_option:not(:first-child) {
    padding-top: 0.3em;
}

.desc {
    white-space: break-spaces;
}

.tasks {
    padding: 0.5em 0.8em 0.2em;
}

.task:not(:first-child) {
    padding-top: 0.2em;
}

.normal_transition-enter-active, .normal_transition-leave-active {
    transition: all .5s;
}

.normal_transition-enter, .normal_transition-leave-to {
    opacity: 0;
}

.normal_transition-enter-to, .normal_transition-leave {
    opacity: 1;
}

.task_transition-enter-active {
    transition: all .5s;
}

.task_transition-leave-active {
    transition: all .5s;
}

</style>
