<template>
  <section class="wrapper bg-light">
    <div class="container py-15 py-md-17 position-relative">
      <div
        class="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mb-10 mb-md-12"
      >
        <div class="col-lg-6">
          <div class="row gx-md-5 gy-5">
            <div class="col-md-6">
              <figure class="rounded">
                <img
                  src="/assets/img/photos/ana-vilhena.jpg"
                  alt="photo"
                />
              </figure>
            </div>
            <!--/column -->
            <div class="col-md-6 align-self-end">
              <figure class="rounded">
                <img
                  src="/assets/img/photos/catarina-fernandes.jpeg"
                  alt="photo"
                />
              </figure>
            </div>
            <!--/column -->
            
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!--/column -->
        <div class="col-lg-6">
          <h2 class="fs-16 text-uppercase text-primary mb-3">Quem somos?</h2>
          <h3 class="display-3 mb-5">
            Especialistas em soluções de Recursos Humanos e Proteção de Dados,
            com uma base legal.
          </h3>
          <p class="mb-6">
            Especialistas em soluções de Recursos Humanos que atendem às
            necessidades específicas de cada organização que vão desde o
            recrutamento ao offboarding, passando pelo compliance laboral e pelo
            desenvolvimento, aptos a entregar serviços personalizados e de alta
            qualidade. 
            <br><br>
            Vasta experiência no desenvolvimento de Programas de
            Conformidade com o RGPD e a implementação dos mesmos no seio de
            diversas organizações, entre as quais, organismos públicos e
            empresas privadas de diversos setores de atividade económica, bem
            como em Auditorias de Conformidade e prestação de serviços para
            diversas organizações enquanto DPO - Data Protection Officer.
          </p>
          <!-- <div class="row align-items-center counter-wrapper gy-6">
            <div class="col-md-6">
              <h3 class="counter counter-lg mb-1">
                <CommonCounter
                  parentClass=""
                  :min="0"
                  :max="99.7"
                  :time="1400"
                />%
              </h3>
              <h5 class="mb-0">Customer Satisfaction</h5>
            </div>
            
            <div class="col-md-6">
              <h3 class="counter counter-lg mb-1">
                <CommonCounter parentClass="" :min="0" :max="12" :time="800" />x
              </h3>
              <h5 class="mb-0">Revenue Growth</h5>
            </div>

          </div> -->
          <!--/.row -->
        </div>
        <!--/column -->
      </div>
      <!--/.row -->
      <div class="row gx-lg-8 gx-xl-12 gy-6 mb-7 mb-md-9">
        <div v-for="(elm, i) in infoItems" :key="i" class="col-lg-4">
          <div class="d-flex flex-row">
            <div>
              <div
                class="icon btn btn-block pe-none btn-soft-primary me-4 w-10 h-10"
              >
                <span class="number fs-18">{{ elm.number }}</span>
              </div>
            </div>
            <div>
              <h3>{{ elm.title }}</h3>
              <p class="mb-2">
                {{ elm.description }}
              </p>
            </div>
          </div>
        </div>
        <!--/column -->

        <!--/column -->
      </div>
      <!--/.row -->
      <div class="text-center">
        <a href="#" class="btn btn-primary">Mais detalhes</a>
      </div>
    </div>
    <!-- /.container -->
  </section>
</template>

<script setup>
import { infoItems } from "@/data/features";
import { ref } from "vue";

const modalOpen = ref();
const modalClose = () => {
  modalOpen.value = false;
};
</script>

<style lang="scss" scoped></style>
