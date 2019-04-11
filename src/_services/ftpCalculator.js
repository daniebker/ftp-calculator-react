// Taken from Training Peaks: https://www.trainingpeaks.com/blog/power-training-levels/
const ACTIVE_RECOERY_PERCENT_MAX = 0.55;
const ENDURACE_PERCENT_LOW = 0.56;
const ENDURANCE_PERCENT_MAX = 0.75;
const TEMPO_PERCENT_LOW = 0.76;
const TEMPO_PERCENT_MAX = 0.90;
const SWEET_SPOT_PERCENT_MIN = 0.83;
const SWEET_SPOT_PERCENT_MAX = 0.88;
const THRESHOLD_PERCENT_MIN = 0.91;
const THRESHOLD_PERCENT_MAX = 1.05;
const VOTWO_MAX_PERCENT_MIN = 1.06;
const VOTWO_MAX_PERCENT_MAX = 1.20;
const AEROBIC_CAPACITY_PERCENT_MIN = 1.21;
const AEROBIC_CAPACITY_PERCENT_MAX = 1.30;

function multiplyAndRound(ftp, value) {
    return Math.round(ftp*value);
}

function calculateActiveRecovery(ftp) {
    return { min: 0, max: multiplyAndRound(ftp, ACTIVE_RECOERY_PERCENT_MAX) }
}

function calculateEnduranceRange(ftp) {
    return { min: multiplyAndRound(ftp, ENDURACE_PERCENT_LOW), max: multiplyAndRound(ftp, ENDURANCE_PERCENT_MAX) }
}

function calculateTempoRange(ftp) {
    return { min: multiplyAndRound(ftp, TEMPO_PERCENT_LOW), max: multiplyAndRound(ftp, TEMPO_PERCENT_MAX) }
}

function calculateSweetSpotRange(ftp) {
    return { min: multiplyAndRound(ftp, SWEET_SPOT_PERCENT_MIN), max: multiplyAndRound(ftp, SWEET_SPOT_PERCENT_MAX) }
}

function calculateThresholdRange(ftp) {
    return { min: multiplyAndRound(ftp, THRESHOLD_PERCENT_MIN), max: multiplyAndRound(ftp, THRESHOLD_PERCENT_MAX) }
}

function calculateVOtwoMaxRange(ftp) {
    return { min: multiplyAndRound(ftp, VOTWO_MAX_PERCENT_MIN), max: multiplyAndRound(ftp, VOTWO_MAX_PERCENT_MAX) }
}

function calculateAerobicCapacityRange(ftp) {
    return { min: multiplyAndRound(ftp, AEROBIC_CAPACITY_PERCENT_MIN), max: multiplyAndRound(ftp, AEROBIC_CAPACITY_PERCENT_MAX) }
}

function calculateFtpValue(ftp) {
    return multiplyAndRound(ftp, 0.95);
}

function calculateFtp(ftp) {
    return {
        activeRecovery: calculateActiveRecovery(ftp),
        endurance: calculateEnduranceRange(ftp),
        tempo: calculateTempoRange(ftp),
        sweetSpot: calculateSweetSpotRange(ftp),
        threshold: calculateThresholdRange(ftp),
        votwoMax: calculateVOtwoMaxRange(ftp),
        aerobicCapacity: calculateAerobicCapacityRange(ftp),
        value: calculateFtpValue(ftp)
    }
}

export default {
    calculateFtp: calculateFtp
}