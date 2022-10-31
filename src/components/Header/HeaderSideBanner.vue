<template>
  <div class="sideBanner">
    <ul class="sideBannerLeft">
      <li>
        <a class="textLink" href="#">CHELSEA FOUNDATION</a>
      </li>
      <li>
        <a class="textLink" href="#">NO TO HATE</a>
      </li>
    </ul>
    <div class="sideBannerRight">
      <ul class="login">
        <li>
          <a class="textLink" href="#">SIGN IN</a>
        </li>
        <li>
          <a class="textLink" href="#">REGISTER</a>
        </li>
      </ul>
      <ul class="partners">
        <li>
          <a href="#">
            <img
              src="/images/Nike_Swoosh_Black.webp"
              alt="Nike Swoosh"
              class="partnerImg"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="/images/Three_Black.webp"
              alt="Three UK"
              class="partnerImg"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="/images/Whalefin_Colour_Black.webp"
              alt="Whalefin"
              class="partnerImg"
            />
          </a>
        </li>
        <li>
          <a href="#"
            ><img
              src="/images/Trivago_Coloured.webp"
              alt="Trivago"
              class="partnerImg"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.sideBanner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border-bottom: 1px solid #ddd;
}

.sideBannerLeft,
.login {
  display: flex;
}

.login {
  margin-right: 32px;
  border-right: 1px solid #ddd;
}

.sideBannerLeft li,
.login li {
  margin-right: 32px;
}

.sideBannerRight {
  display: flex;
  align-items: center;
}

.textLink {
  font-size: 14px;
  line-height: 20px;
  color: var(--secondary-dark-blue-c);
  font-weight: 700;
}

.partners {
  display: flex;
}

.partners li {
  display: flex;
}

.partnerImg {
  height: 32px;
}
</style>
