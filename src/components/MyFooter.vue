<template>
  <section id="snippet-2" class="wrapper bg-light wrapper-border">
    <div class="container-fluid pt-15 pt-md-17 pb-13 pb-md-15 px-xxl-10">
      <div class="mt-14"></div>
      <footer class="bg-soft-primary">
        <div class="container">
          <div class="row">
            <div class="col-xl-11 col-xxl-10 mx-auto">
              <div
                class="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 mt-n50p mb-n5"
                style="background-image: url(/assets/img/photos/bg3.jpg)"
              >
                <div
                  class="card-body p-6 p-md-11 d-lg-flex flex-row align-items-lg-center justify-content-md-between text-center text-lg-start"
                >
                  <h3
                    class="display-6 mb-6 mb-lg-0 pe-lg-15 pe-xxl-18 text-white"
                  >
                    Estamos a recrutar trabalhadores especializados na área de Recursos Humanos e Proteção de dados. Junta-te a nós!
                  </h3>
                  <a
                    href="#"
                    class="btn btn-white rounded-pill mb-0 text-nowrap"
                    >Contacta-nos</a
                  >
                </div>
                <!--/.card-body -->
              </div>
              <!--/.card -->
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <div class="container pb-12 text-center">
          <div class="row mt-n10 mt-lg-0">
            <div class="col-xl-10 mx-auto">
              <div class="row mb-3">
                <div class="col-md-4">
                  <div class="widget">
                    <h4 class="widget-title">Address</h4>
                    <address>
                      Moonshine St. 14/05 <br class="d-none d-md-block" />
                      Light City, London, UK
                    </address>
                  </div>
                  <!-- /.widget -->
                </div>
                <!--/column -->
                <div class="col-md-4">
                  <div class="widget">
                    <h4 class="widget-title">Phone</h4>
                    <p>00 (123) 456 78 90 <br />00 (987) 654 32 10</p>
                  </div>
                  <!-- /.widget -->
                </div>
                <!--/column -->
                <div class="col-md-4">
                  <div class="widget">
                    <h4 class="widget-title">E-mail</h4>
                    <p>
                      <a href="mailto:ana.vilhena@blueshield.pt" class="link-body"
                        >HR: ana.vilhena@blueshield.pt</a
                      >
                      <br class="d-none d-md-block" /><a
                        href="mailto:catarina.barros.fernandes@blueshield.pt"
                        class="link-body"
                        >DP: catarina.barros.fernandes@blueshield.pt</a
                      >
                    </p>
                  </div>
                  <!-- /.widget -->
                </div>
                <!--/column -->
              </div>
              <!--/.row -->
              <p>
                © {{ new Date().getFullYear() }} Sandbox. All rights reserved.
              </p>
              <nav class="nav social justify-content-center">
                <a
                  v-for="link in socialLinks"
                  :key="link.iconClass"
                  :href="'#'"
                >
                  <i :class="link.iconClass"></i>
                </a>
              </nav>
              <!-- /.social -->
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </footer>
    </div>
    <!-- /.container -->

    <!-- /.container -->
  </section>
</template>

<script setup>
import { socialLinks } from "../data/footer";
</script>

<style lang="scss" scoped></style>
