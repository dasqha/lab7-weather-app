<template>
  <div class="div mb-5">
    <div class="container mt-3">
      <div class="row">
        <div class="col-12">
          <!-- MAIN CARD -->
          <div
            v-if="this.$store.state.dataIsRecived"
            class="card text-white border-radius-25"
          >
            <div class="card-body text-center text-white">
              <img
                :src="
                  'http://openweathermap.org/img/wn/' +
                    weather.weather[0].icon +
                    '.png'
                "
                alt="weather icon"
                class="wow bounceIn"
                data-wow-delay="0.8s"
              />
              <h1 class="font-weight-bold wow fadeInUp" data-wow-delay="0.2s">
                {{ weather.main.temp }}<span>°C</span>
              </h1>
              <h4 class="font-poppins wow fadeInUp" data-wow-delay="0.4s">
                {{ weather.name }}
              </h4>
              <h5
                class="text-white50 text-capitalize font-weight-light wow fadeInUp"
                data-wow-delay="0.6s"
              >
                {{ weather.weather[0].description }}
              </h5>
            </div>
            <!-- <input v-on:keyup.enter="submit" type="text" v-model="city" /> -->
            <div class="form__group field">
              <input
                v-model="city"
                v-on:keyup.enter="submit"
                type="input"
                class="form__field"
                placeholder="City"
                name="name"
                id="name"
                required
              />
              <label for="name" class="form__label">Name</label>
            </div>
          </div>
          <div v-else class="weather-widget">
            <img src="/src/assets/relax.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="weather.main" class="container my-3">
      <div class="row">
        <div class="col-12">
          <div class="card border-radius-25">
            <div class="card-body">
              <div class="row">
                <!-- TODAY -->
                <div class="col-6 col-md-2 mb-2">
                  <div class="text-primary-light font-weight-bold">TODAY</div>
                </div>
                <!-- DATE -->
                <div class="offset-md-8 col-6 col-md-2 text-center mb-2">
                  <div class="text-primary-light">{{ weather.datetime }}</div>
                </div>

                <!-- HORIZONTAL LAYOUT SCROLL -->
                <div class="container horizontal-scroll mb-3">
                  <div class="row flex-nowrap">
                    <!-- FEELS LIKE CARD -->
                    <div
                      class="col-8 col-md-3 mb-2 wow fadeInDown"
                      data-wow-delay="0.2s"
                    >
                      <div class="card bg-orange-gradient">
                        <div class="card-body text-center">
                          <i
                            class="material-icons-outlined text-dark"
                            style="font-size:40px"
                            >home</i
                          >
                          <h6 class="text-dark font-weight-bold font-poppins">
                            Feels like
                          </h6>
                          <h6 class="text-dark">
                            {{ weather.main.feels_like }}°C
                          </h6>
                        </div>
                      </div>
                    </div>
                    <!-- WIND CARD -->
                    <div
                      class="col-8 col-md-3 mb-2 wow fadeInDown"
                      data-wow-delay="0.4s"
                    >
                      <div class="card bg-purple-gradient">
                        <div class="card-body text-center">
                          <i
                            class="material-icons-outlined text-dark"
                            style="font-size:40px"
                            >toys</i
                          >
                          <h6 class="text-dark font-weight-bold font-poppins">
                            Wind
                          </h6>
                          <h6 class="text-dark">
                            {{ weather.wind.speed }} m/s
                          </h6>
                        </div>
                      </div>
                    </div>
                    <!-- HUMIDITY CARD -->
                    <div
                      class="col-8 col-md-3 mb-2 wow fadeInDown"
                      data-wow-delay="0.6s"
                    >
                      <div class="card bg-blue-gradient">
                        <div class="card-body text-center">
                          <i
                            class="material-icons-outlined text-dark"
                            style="font-size:40px"
                            >waves</i
                          >
                          <h6 class="text-dark font-weight-bold font-poppins">
                            Humidity
                          </h6>
                          <h6 class="text-dark">
                            {{ weather.main.humidity }}%
                          </h6>
                        </div>
                      </div>
                    </div>
                    <!-- PRESSURE CARD -->
                    <div
                      class="col-8 col-md-3 mb-2 wow fadeInDown"
                      data-wow-delay="0.8s"
                    >
                      <div class="card bg-red-gradient">
                        <div class="card-body text-center">
                          <i
                            class="material-icons-outlined text-dark"
                            style="font-size:40px"
                            >arrow_downward</i
                          >
                          <h6 class="text-dark font-weight-bold font-poppins">
                            Pressure
                          </h6>
                          <h6 class="text-dark">
                            {{ weather.main.pressure }}mb
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 d-none d-sm-block">
                  <div
                    class="table-responsive wow slow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <table
                      class="table table-borderless text-center text-white"
                    >
                      <thead>
                        <tr>
                          <!-- <th scope="col" class="font-poppins">UV Index</th> -->
                          <th scope="col" class="font-poppins">Clouds</th>
                          <!-- <th scope="col" class="font-poppins">
                            Precipitation
                          </th> -->
                          <th scope="col" class="font-poppins">Visibility</th>
                          <!-- <th scope="col" class="font-poppins">
                            Air Quality Index
                          </th> -->
                          <!-- <th scope="col" class="font-poppins">Dew Point</th> -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <!-- <td
                            v-if="weather.sys.type <= 2"
                            class="bg-success-light"
                          >
                            {{ weather.sys.type }}
                          </td>
                          <td
                            v-else-if="weather.uv <= 5"
                            class="bg-warning-light"
                          >
                            {{ weather.uv }}
                          </td>
                          <td
                            v-else-if="weather.uv <= 7"
                            class="bg-danger-light"
                          >
                            {{ weather.uv }}
                          </td>
                          <td
                            v-else-if="weather.uv <= 10"
                            class="bg-danger-light"
                          >
                            {{ weather.uv }}
                          </td>
                          <td
                            v-else-if="weather.uv >= 11"
                            class="bg-danger-light"
                          >
                            {{ weather.uv }}
                          </td> -->
                          <td>{{ weather.clouds.all }}%</td>
                          <!-- <td>{{ weather.precip }}%</td> -->
                          <td>{{ weather.visibility }} km</td>
                          <!-- <td>{{ weather.aqi }}</td> -->
                          <!-- <td>{{ weather.dewpt }}°C</td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="col-12 d-block d-sm-none wow slow fadeInUp">
                  <div class="table-responsive" data-wow-delay="0.20s">
                    <table class="table table-borderless text-white">
                      <tbody>
                        <tr>
                          <th scope="row" class="font-poppins">UV Index</th>
                          <td
                            v-if="weather.uv <= 2"
                            class="bg-success-light text-center"
                          >
                            {{ weather.uv }}
                          </td>
                          <td
                            v-else-if="weather.uv <= 5"
                            class="bg-warning-light text-center"
                          >
                            {{ weather.uv }}
                          </td>
                          <td
                            v-else-if="weather.uv <= 7"
                            class="bg-danger-light text-center"
                          >
                            {{ weather.uv }}
                          </td>
                          <td
                            v-else-if="weather.uv <= 10"
                            class="bg-danger-light text-center"
                          >
                            {{ weather.uv }}
                          </td>
                          <td
                            v-else-if="weather.uv >= 11"
                            class="bg-danger-light text-center"
                          >
                            {{ weather.uv }}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" class="font-poppins">Clouds</th>
                          <td class="text-center">{{ weather.clouds.all }}%</td>
                        </tr>
                        <tr>
                          <th scope="row" class="font-poppins">
                            Precipitation
                          </th>
                          <td class="text-center">{{ weather.precip }}%</td>
                        </tr>
                        <tr>
                          <th scope="row" class="font-poppins">Visibility</th>
                          <td class="text-center">
                            {{ weather.visibility }} km
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" class="font-poppins">
                            Air Quality Index
                          </th>
                          <td class="text-center">{{ weather.aqi }}</td>
                        </tr>
                        <tr>
                          <th scope="row" class="font-poppins">Dew Point</th>
                          <td class="text-center">{{ weather.dewpt }}°C</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "",
    };
  },
  computed: {
    weather() {
      return this.$store.state.weather; // gets weather state from Vuex store
    },
  },
  created() {
    this.$store.dispatch("updateWeather"); // dispatch "updateWeather" when component is created
  },
  methods: {
    submit() {
      this.$store.dispatch("updateWeather", this.city);
    },
  },
};
</script>

<style lang="scss" scoped>
$primary: #11998e;
$secondary: #38ef7d;
$white: #fff;
$gray: #9b9b9b;
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
  padding-bottom: 10px;
  margin: 0 auto;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;
  color: $white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: $gray;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $primary;
    font-weight: 700;
  }
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary, $secondary);
  border-image-slice: 1;
}
/* reset input */
.form__field {
  &:required,
  &:invalid {
    box-shadow: none;
  }
}
/* demo */
body {
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.5rem;
  background-color: #222222;
}
</style>
