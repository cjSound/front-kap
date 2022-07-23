<!--
 * @Author: 曹捷
 * @Date: 2022-07-17 19:52:57
 * @LastEditors: 曹捷
 * @LastEditTime: 2022-07-21 23:54:31
 * @Description: fileContent
-->
<template>
  <div>
    <a-divider>学习统计</a-divider>
    <a-divider>2023年目标高考成绩 {{110 + 110 + 90 +70+70 +70}}</a-divider>
    <a-row>
      <a-col :span="4">语文：100</a-col>
      <a-col :span="4">数学：110</a-col>
      <a-col :span="4">英语：90</a-col>
      <a-col :span="4">物理：70</a-col>
      <a-col :span="4">化学：70</a-col>
      <a-col :span="4">地理：70</a-col>
    </a-row>
    <a-divider>2022年高考成绩 {{78+44+41+42+43+59}}</a-divider>
    <a-row>
      <a-col :span="4">语文：78</a-col>
      <a-col :span="4">数学：44</a-col>
      <a-col :span="4">英语：41</a-col>
      <a-col :span="4">物理：42</a-col>
      <a-col :span="4">化学：43</a-col>
      <a-col :span="4">地理：59</a-col>
    </a-row>

    <a-row>
      <a-col :span="24">
        <a-divider>学习目标完成情况【日8h】</a-divider>
        <div id="g2pie" style="height:300px;"></div>
      </a-col>
      <a-col :span="12"></a-col>
    </a-row>
    <a-divider>学习趋势 </a-divider>
    <div id="studyLine" style="height:400px;">

    </div>
  </div>
</template>

<script>
import { studyList } from './data'
import { toRefs, reactive, onMounted } from 'vue'
export default {
  props: {
    dataList: {
      type: Array
    }
  },
  setup (props) {
    const { Line, Pie } = G2Plot
    let _data = reactive({
      studyList,
    })

    let _methods = {
      initPie () {
        let stime = 0, sum = 0;
        studyList.forEach(el => {
          stime += el.time
          sum += 8
        })

        let data = [
          { type: '学习时间', value: stime },
          { type: '浪费时间', value: sum - stime },
        ]

        const piePlot = new Pie('g2pie', {
          appendPadding: 10,
          data,
          angleField: 'value',
          colorField: 'type',
          radius: 0.9,
          color: ['#BBE800', '#FF4500'],
          label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
            style: {
              fontSize: 14,
              textAlign: 'center',
            },
          },
          interactions: [{ type: 'element-active' }],
        });
        piePlot.render();

      },
      initLine () {
        const line = new Line('studyLine', {
          data: studyList,
          padding: 'auto',
          xField: 'date',
          yField: 'time',
          xAxis: {
            // type: 'timeCat',
            // tickCount: 5,
          },
          yAxis: {
            title: { text: '时间(h)' },
            maxLimit: 12
          },
          point: {
            size: 5,
            shape: 'diamond',
            style: {
              fill: 'white',
              stroke: '#5B8FF9',
              lineWidth: 2,
            },
          },
          annotations: [
            {
              type: 'regionFilter',
              start: ['min', 9],
              end: ['max', '0'],
              color: '#F4664A',
            },
            {
              type: 'text',
              position: ['min', 9],
              content: '目标时间【9h】',
              offsetY: -4,
              style: {
                textBaseline: 'bottom',
              },
            },
            {
              type: 'line',
              start: [0, 9],
              end: ['max', 9],
              style: {
                stroke: '#FF4500',
                lineDash: [2, 2],
              },
            },
            {
              type: 'text',
              position: ['min', 'median'],
              content: '平均学习时间',
              offsetY: -4,
              style: {
                textBaseline: 'bottom',
              },
            },
            {
              type: 'line',
              start: [0, 'median'],
              end: ['max', 'median'],
              style: {
                lineDash: [2, 2],
              },
            },
          ]
        });
        line.render();
      }
    }

    console.log(props)
    onMounted(() => {
      _methods.initLine()
      _methods.initPie()
    })
    return {
      ...toRefs(_data)
    }
  }
}
</script>

<style lang="less">
</style>