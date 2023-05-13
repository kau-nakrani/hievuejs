<script setup>
import SHButton from './../../components/SHButton/SHButton.vue'
const List0 = [
  {
    name: 'Feature'
  },
  {
    name: 'Documentations'
  },
  {
    name: 'Support'
  },
  {
    name: 'Pro Account'
  }
]
const List1 = [
  {
    name: 'Terms and Conditions'
  },
  {
    name: 'Privacy Policy'
  }
]
</script>
<template>
  <!-- <b-list-group>
    <b-list-group-item>Cras justo odio</b-list-group-item>
    <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
    <b-list-group-item>Morbi leo risus</b-list-group-item>
    <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
    <b-list-group-item>Vestibulum at eros</b-list-group-item>
  </b-list-group> -->
  <!-- <SHButton text="text" /> -->
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex footer-main-col">
          <div className="left-col d-grid">
            <div className="first-col">
              <img src="./../../assets/images/logo/logo.png" fluid alt="" />
              <p className="fw-400 mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
            </div>
            <div className="second-col">
              <h6 className="fw-600">Quick Links</h6>
              <ul v-for="i in List0">
                <li>
                  <RouterLink to="/">{{ i.name }}</RouterLink>
                </li>
              </ul>
            </div>
            <div className="third-col">
              <h6 className="fw-600">Other</h6>
              <ul v-for="i in List1">
                <li>
                  <RouterLink to="/">{{ i.name }}</RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-col">
            <h6 className="fw-600">Email Newsletter</h6>
            <div className="form-group">
              <input
                type="email"
                name=""
                className="form-control custom-input"
                placeholder="Email address"
              />
              <span className="fw-400 d-block mt-2"
                >We won't send you spam. Unsubscribe at any time.</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div className="sub-footer">
    <h6>&copy;2023 plugin. All Rights Reserved by wplugin.com</h6>
  </div>
</template>
<style>
:root {
  --right-col-width: 380px;
}
.footer-main-col {
  grid-gap: 50px;
}
.left-col {
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
}
footer {
  background-color: var(--accent-color0);
  padding: 78px 12px 58px;
}
footer .right-col {
  width: var(--right-col-width);
}
footer .left-col {
  width: calc(100% - var(--right-col-width));
}
footer p {
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: var(--text-color);
  font-family: var(--secondary-font);
}
footer h6 {
  color: var(--secondary-color);
  font-size: 20px;
  margin-bottom: 36px;
}
footer ul li a {
  font-weight: 400;
  font-size: 19px;
  color: var(--secondary-color);
}
footer ul li {
  padding-bottom: 20px;
}
footer span {
  font-size: 14px;
  color: var(--text-color);
  font-family: var(--secondary-font);
}
footer input.form-control {
  background-color: #e3f1f5;
  border-color: #e3f1f5;
  border-radius: 11px;
}
.sub-footer {
  background-color: var(--white-color);
  padding: 30px 12px;
}
.sub-footer h6 {
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--secondary-color);
}
</style>
