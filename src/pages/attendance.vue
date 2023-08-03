<template>
    <n-form ref="formRef" :model="model" :rules="rules" label-placement="left" label-width="120">
        <n-form-item path="startTime" label="今日打卡时间">
            <n-time-picker
                v-model:value="model.startTime"
                style="width: 500px"
                :default-value="model.startTime"
                @change="timeChange"
            />
        </n-form-item>
        <n-form-item path="workHour" label="上班时长">
            <n-input-number
                v-model:value="model.workHour"
                style="width: 500px"
                placeholder="上班时长"
                :min="0"
                :max="12"
                :precision="2"
                @update:value="workHourChange"
            />
        </n-form-item>
        <n-form-item v-if="model.waitTime" label="距离下班还有">
            <n-countdown ref="countdown" :duration="model.waitTime" :active="true" />
        </n-form-item>
        <n-form-item v-if="model.leaveTime" label="今日预计下班时间">
            {{ model.leaveTime }}
        </n-form-item>
        <n-form-item v-if="model.validTime" label="今日出勤时间">
            {{ model.validTime }}
        </n-form-item>
    </n-form>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue"
import dayjs from "dayjs"
import {
    NForm,
    NFormItem,
    FormInst,
    FormRules,
    NTimePicker,
    NInputNumber,
    NCountdown,
} from "naive-ui"

interface ModelType {
    startTime: number | null
    validTime: number | null
    workHour: number
    leaveTime: string | null
    waitTime: number | null
}
const formRef = ref<FormInst | null>(null)

const localStartTime: string | null = localStorage.getItem("localStartTime")
const localWorkHour: string | null = localStorage.getItem("localworkHour")

const model = ref<ModelType>({
    startTime: localStartTime
        ? dayjs(
              dayjs().format("YYYY-MM-DD") + dayjs(Number(localStartTime)).format(" hh:mm:ss")
          ).valueOf()
        : dayjs(dayjs().format("YYYY-MM-DD") + " 09:30:00").valueOf(),
    workHour: localWorkHour ? Number(localWorkHour) : 9,
    leaveTime: null,
    waitTime: null,
    validTime: null,
})
const rules: FormRules = {
    startTime: [
        {
            required: true,
            message: "请选择时间",
        },
    ],
}
onMounted(() => {
    computeRes()
})

const timeChange = (e: number | null) => {
    e && localStorage.setItem("localStartTime", String(e))
    computeRes()
}
const workHourChange = (e: number | null) => {
    e && localStorage.setItem("localWorkHour", String(e))
    computeRes()
}
const computeRes = () => {
    if (!model.value.startTime || !model.value.workHour) return
    let { startTime, workHour } = model.value
    workHour += 1.5
    // 将开始时间戳转换为 dayjs 对象
    const startDate = dayjs(startTime)

    // 计算经过的毫秒数
    const workMilliseconds = Math.round(workHour * 3600 * 1000)

    // 计算结束时间的 dayjs 对象
    const endDate = startDate.add(workMilliseconds, "millisecond")

    // 格式化结束时间为 HH:mm:ss
    const endFormatted = endDate.format("HH:mm:ss")

    // 计算剩余的毫秒数
    const remainingMilliseconds = endDate.diff(dayjs(), "millisecond")
    // 计算有效上班时长
    const validTime: any = (dayjs().diff(startDate, "millisecond") / (1000 * 60 * 60)).toFixed(2)

    model.value.waitTime = remainingMilliseconds
    model.value.leaveTime = endFormatted
    model.value.validTime = validTime > 1.5 ? validTime - 1.5 : validTime

    console.log(validTime)
}
</script>
