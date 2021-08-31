<template>
    <div id="app">
        <OperationManual v-model="value" :guide_tpls="guide_tpls" :task_tpls="task_tpls" :debug="true" title="操作手册"
                         style="width: 200px; background-color: rgba(255,255,255,0.5); margin-top: 100px; font-size: 16px;
                          margin-left: 1em;padding: 0.3em 0.3em;border-radius: 4px; border: 1px #d7d7d7 solid;box-shadow: 0 1px 2px rgb(0 0 0 / 20%);"></OperationManual>
    </div>
</template>

<script>
import OperationManual from './../packages/operationManual/index';
import {v1 as uuid} from 'uuid';

let task4Id = uuid();

export default {
  name: 'app',
  components: {
    OperationManual: OperationManual,
  },
  data() {
    return {
      value: [],
      guide_tpls: [
        {
          type: 'manual1',
          title: 'Test Manual1',
          start_task_types: ['task1'],
          desc: '这是 Test Manual1 的描述',
        },
        {
          type: 'manual2',
          title: 'Manual2',
          start_task_types: ['task1'],
          desc: 'Test Manual 2',
        },
        {
          type: 'manual3',
          title: 'Manual3',
          start_task_types: ['task1'],
          desc: 'Test Manual 3',
        },
      ],
      task_tpls: [
        {
          type: 'task1',
          title: 'Task1',
          desc: '该任务结束将同时进入 task2 和 task3，并且会带上弹窗输入的值',
          show_do_button: true,
          show_done_button: false,
          do_button_title: 'Task1 Do',
          required_outputs: ['a'],
          onDoClick: ({output}) => {
            let a = prompt('aaa');
            if (a) {
              output({a});
            }
          },
          next_tasks: [{type: 'task2'}, {type: 'task3'}],
          beforeActive: ({inputs}) => {window.console.log('Task1 beforeActive', inputs)},
          beforeComplete: ({outputs}) => {window.console.log('Task1 beforeComplete', outputs)},
          beforeUndoEnter: () => {window.console.log('Task1 beforeUndoEnter')},
          beforeUndoLeave: () => {window.console.log('Task1 beforeUndoLeave')},
          beforeRedoEnter: () => {window.console.log('Task1 beforeRedoEnter')},
          beforeRedoLeave: () => {window.console.log('Task1 beforeRedoLeave')},
        },
        {
          type: 'task2',
          title: ({inputs}) => {return 'Task2_' + inputs.a},
          desc: '该任务与 task3 结束时，将进入task4',
          required_inputs: ['a'],
          next_tasks: [{id: task4Id, type: 'task4'}],
          show_do_button: true,
          show_done_button: true,
          onDoClick: ({output}) => {
            let a = prompt('aaa');
            if (a) {
              output({a});
            }
          },
          onDoneClick: ({output}) => {
            output({a: 1});
          },
          beforeActive: ({inputs}) => {window.console.log('Task2 beforeActive', inputs)},
          beforeComplete: ({outputs}) => {window.console.log('Task2 beforeComplete', outputs)},
          beforeUndoEnter: () => {window.console.log('Task2 beforeUndoEnter')},
          beforeUndoLeave: () => {window.console.log('Task2 beforeUndoLeave')},
          beforeRedoEnter: () => {window.console.log('Task2 beforeRedoEnter')},
          beforeRedoLeave: () => {window.console.log('Task2 beforeRedoLeave')},
        },
        {
          type: 'task3',
          title: 'Task3',
          show_do_button: true,
          show_done_button: true,
          do_button_title: '去执行',
          done_button_title: '已完成',
          onDoClick: ({output}) => {
            let b = prompt('bbb');
            if (b) {
              output({b});
            }
          },
          onDoneClick: ({output}) => {
            output({b: 2});
          },
          next_tasks: [{id: task4Id, type: 'task4'}],
          beforeActive: ({inputs}) => {window.console.log('Task3 beforeActive', inputs)},
          beforeComplete: ({outputs}) => {window.console.log('Task3 beforeComplete', outputs)},
          beforeUndoEnter: () => {window.console.log('Task3 beforeUndoEnter')},
          beforeUndoLeave: () => {window.console.log('Task3 beforeUndoLeave')},
          beforeRedoEnter: () => {window.console.log('Task3 beforeRedoEnter')},
          beforeRedoLeave: () => {window.console.log('Task3 beforeRedoLeave')},
        },
        {
          type: 'task4',
          title: 'Task4',
          required_inputs: ['a', 'b'],
          done_button_title: 'Task4 Done',
          beforeActive: ({inputs}) => {window.console.log('Task4 beforeActive', inputs)},
          beforeComplete: ({outputs}) => {window.console.log('Task4 beforeComplete', outputs)},
          beforeUndoEnter: () => {window.console.log('Task4 beforeUndoEnter')},
          beforeUndoLeave: () => {window.console.log('Task4 beforeUndoLeave')},
          beforeRedoEnter: () => {window.console.log('Task4 beforeRedoEnter')},
          beforeRedoLeave: () => {window.console.log('Task4 beforeRedoLeave')},
        },
      ],
    };
  },
  created() {
  }
};
</script>