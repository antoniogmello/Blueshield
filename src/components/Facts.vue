<template>
  <section class="wrapper bg-light">
    <div class="container pt-15 pt-md-17 pb-13 pb-md-15">
      <div class="row gx-md-8 gy-10 align-items-center">
        <div class="col-lg-6 offset-lg-1 order-lg-2 position-relative">
          <figure class="rounded">
            <img
              class="img-fluid"
              src="/assets/img/photos/bg-why-us.png"
              srcset="/assets/img/photos/bg-why-us.png"
              alt="photo"
            />
          </figure>
          <div
            class="card shadow-lg position-absolute d-none d-md-block"
            style="top: 15%; left: -7%"
          >
            <div class="card-body py-4 px-5">
              <div class="d-flex flex-row align-items-center">
                <div>
                  <div
                    class="icon btn btn-block btn-soft-primary pe-none mx-auto me-4 w-10 h-10"
                  >
                    <i class="uil uil-users-alt"></i>
                  </div>
                </div>
                <div>
                  <h3 class="fs-25 counter mb-0 text-nowrap">
                    <Counter :max="60" :min="1" :time="1500" />%

                    <!-- Component for counting number with intersetion observer from omponents>common>counter -->
                  </h3>
                  <p class="fs-16 lh-sm mb-0 text-nowrap">Despesas</p>
                </div>
              </div>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
          <div
            class="card shadow-lg position-absolute text-center d-none d-md-block"
            style="bottom: 10%; left: -10%"
          >
            <div class="card-body p-6">
              <div class="progressbar semi-circle primary mb-3" data-value="80">
                <CircleProgressbar :max="80" />
                <!-- Component for circuler progressbar with animation from omponents>common>CircleProgressbar -->
              </div>
              <h4 class="mb-0">Time Saved</h4>
            </div>
            <!--/.card-body -->
          </div>
          <!--/.card -->
        </div>
        <!--/column -->
        <div class="col-lg-5">
          <h2 class="fs-16 text-uppercase text-primary mb-3">
            Porque somos diferentes?
          </h2>
          <h3 class="display-3 mb-5">
            Somos pioneiros em Portugal ao integrar soluções de Recursos Humanos
            e Proteção de Dados
          </h3>
          <p class="mb-6">
            Com a nossa expertise, garantimos uma gestão eficiente e segura das
            áreas de recursos humanos e proteção de dados, permitindo-lhe focar
            no crescimento e desenvolvimento do seu negócio.
          </p>
          <ul class="icon-list bullet-bg bullet-soft-primary">
            <li v-for="item in features2" :key="item.id">
              <i :class="item.iconClass"></i>{{ item.text }}
            </li>
          </ul>
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import CircleProgressbar from "@/components/common/CircleProgressbar.vue";
import Counter from "@/components/common/Counter.vue";

import { features2 } from "@/data/features";
</script>

<style lang="scss" scoped></style>
