<template>
  <section class="wrapper bg-light">
    <div class="container">
      <h2 class="fs-16 text-uppercase text-primary">O que fazemos?</h2>
      <br />
      <div class="row gx-lg-8 gy-8 align-items-center">
        <!--/column -->
        <div class="col-lg-6">
          <h2 class="display-4 mb-3">Recursos Humanos</h2>
          <p class="lead fs-lg mb-8 pe-xxl-2">
            <span class="underline">Especialistas</span> em soluções de Recursos
            Humanos que atendem às necessidades específicas de cada organização
            que vão desde o recrutamento ao offboarding, passando pelo
            compliance laboral e pelo desenvolvimento, aptos a entregar serviços
            personalizados e de alta qualidade.
          </p>
          <div class="row gx-xl-10 gy-6">
            <div
              v-for="feature in serviceFeaturesHr"
              :key="feature.id"
              class="col-md-6 col-lg-12 col-xl-6"
            >
              <div class="d-flex flex-row">
                <div>
                  <div
                    class="icon btn btn-circle btn-lg btn-soft-primary pe-none me-5"
                  >
                    <i :class="feature.icon"></i>
                  </div>
                </div>
                <div>
                  <h4 class="mb-1">{{ feature.title }}</h4>
                  <p class="mb-0">{{ feature.description }}</p>
                </div>
              </div>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>

        <div class="col-lg-6">
          <h2 class="display-4 mb-3">Proteção de Dados</h2>
          <p class="lead fs-lg mb-8 pe-xxl-2">
            Vasta <span class="underline">experiência</span> no desenvolvimento
            de Programas de Conformidade com o RGPD e a sua implementação no
            seio de diversas organizações, entre as quais, organismos públicos e
            empresas privadas, bem como em Auditorias de Conformidade e
            prestação de serviços enquanto DPO.
          </p>
          <div class="row gx-xl-10 gy-6">
            <div
              v-for="feature in serviceFeaturesDp"
              :key="feature.id"
              class="col-md-6 col-lg-12 col-xl-6"
            >
              <div class="d-flex flex-row">
                <div>
                  <div
                    class="icon btn btn-circle btn-lg btn-soft-primary pe-none me-5"
                  >
                    <i :class="feature.icon"></i>
                  </div>
                </div>
                <div>
                  <h4 class="mb-1">{{ feature.title }}</h4>
                  <p class="mb-0">{{ feature.description }}</p>
                </div>
              </div>
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { serviceFeaturesHr } from "@/data/features";
import { serviceFeaturesDp } from "@/data/features";
</script>

<style lang="scss" scoped></style>
