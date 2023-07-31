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
                @update:value="computeRes"
            />
        </n-form-item>
        <n-form-item v-if="model.waitTime" label="距离下班还有">
            <n-countdown ref="countdown" :duration="model.waitTime" :active="true" />
        </n-form-item>
        <n-form-item v-if="model.leaveTime" label="今日预计下班时间">
            {{ model.leaveTime }}
        </n-form-item>
        <!-- <n-countdown
            ref="countdown"
            :duration="countdownInfo.duration"
            :active="countdownInfo.active"
        /> -->
        <!-- <div style="display: flex; justify-content: flex-start">
            <n-button
                :disabled="!model.startTime"
                round
                type="primary"
                @click="handleValidateButtonClick"
            >
                计算
            </n-button>
        </div> -->
    </n-form>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue"
import dayjs from "dayjs"
import {
    NForm,
    NFormItem,
    FormInst,
    // FormItemRule,
    useMessage,
    FormRules,
    NTimePicker,
    NInputNumber,
    NCountdown,
} from "naive-ui"

interface ModelType {
    startTime: number | null
    workHour: number
    leaveTime: string | null
    waitTime: number | null
}
const formRef = ref<FormInst | null>(null)
const message = useMessage()

const localStartTime: string | null = localStorage.getItem("localStartTime")
const model = ref<ModelType>({
    startTime: localStartTime
        ? Number(localStartTime)
        : dayjs(dayjs().format("YYYY-MM-DD") + " 09:30:00").valueOf(),
    workHour: 9,
    leaveTime: null,
    waitTime: null,
})
const rules: FormRules = {
    startTime: [
        {
            required: true,
            message: "请选择时间",
        },
    ],
    // password: [
    //     {
    //         required: true,
    //         validator(rule: FormItemRule, value: string) {
    //             if (!value) {
    //                 return new Error("需要年龄")
    //             } else if (!/^\d*$/.test(value)) {
    //                 return new Error("年龄应该为整数")
    //             } else if (Number(value) < 18) {
    //                 return new Error("年龄应该超过十八岁")
    //             }
    //             return true
    //         },
    //         trigger: ["input", "blur"],
    //     },
    // ]
}
onMounted(() => {
    computeRes()
})

const timeChange = (e: number | null) => {
    e && localStorage.setItem("localStartTime", String(e))
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

    model.value.waitTime = remainingMilliseconds
    model.value.leaveTime = endFormatted
    console.log(model.value)
}
</script>
