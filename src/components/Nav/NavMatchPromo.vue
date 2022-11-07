<script lang="ts" setup>
import moment from "moment";

const props = defineProps<{
  data:
    | {
        clubLogo: string;
        clubName: string;
        time: string;
        league: string;
        stadium: string;
      }
    | undefined;
}>();
</script>

<template>
  <div class="match-wrapper">
    <div class="content">
      <div class="desc">NEXT MATCH</div>
      <div class="match-content">
        <div class="logo">
          <img
            :src="props.data?.clubLogo"
            :alt="props.data?.clubName"
            class="logo-img"
          />
        </div>
        <div class="match-info">
          <h4 class="opponent">{{ props.data?.clubName }}</h4>
          <div class="location">
            at <span class="stadium">{{ props.data?.stadium }}</span>
          </div>
          <div class="time">
            {{ moment(props.data?.time).format("dddd DD MMM YYYY.") }}
            KO -
            {{ moment(props.data?.time).format("HH:mm") }}
          </div>
          <h5 class="league">{{ props.data?.league }}</h5>
          <a href="#" class="match-info-link">MATCH CENTRE</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scope lang="scss">
.match-wrapper {
  position: relative;
  min-height: 432px;
  width: 432px;
  height: 100%;
  background: var(--secondary-dark-blue-c);
  display: flex;
}

.content {
  flex-grow: 1;
  padding: 64px 88px 34px 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.desc {
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 14px;
}

.match-content {
  display: flex;
  flex: 1 0 calc(100% - 60px);
}

.logo {
  width: 48px;
  height: 48px;
  margin-right: 32px;
  flex-shrink: 0;

  .logo-img {
    width: 100%;
    height: 100%;
  }
}

.opponent {
  font-size: 24px;
  line-height: 38px;
  font-weight: 700;
}

.location {
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
  margin-bottom: 25px;
}

.stadium {
  font-weight: 500;
}

.time {
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 6px;
  font-weight: 300;
}

.league {
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 52px;
  font-weight: 500;
  text-transform: uppercase;
}

.match-info-link {
  text-transform: uppercase;
  font-size: 14px;
  line-height: 18px;
  color: var(--main-white-c);
  font-weight: 700;
}
</style>
