<template>
  <div
    id="modal-cao"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="County Administrator's Office Info"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h3 id="myModalLabel" class="modal-title">
            County Administrator's Office
          </h3>
        </div>
        <div class="modal-body deptinfo">
          <a class="dept-phone" href="tel:510-272-6984"
            ><i class="material-icons md-48">&#xE0cd;</i></a
          ><a
            class="dept-map"
            target="_blank"
            href="https://goo.gl/maps/qSGNz3QdGsJ2"
            ><i class="material-icons md-48">&#xE52E;</i></a
          >
          <p class="dept-address">
            1221 Oak Street, Room 555<br />
            Oakland, CA 94612<br />
            510.272.6984
          </p>
          <h4 class="deptlinks">
            <i class="material-icons md-36 md-vertical-middle">&#xE157;</i>
            Links
          </h4>
          <ul>
            <li>
              <a class="dept-link" href="https://cao.acgov.org/index.page"
                >Department Website</a
              >
            </li>
          </ul>
          <h4 class="deptlinks">
            <i class="material-icons md-36 md-vertical-middle">&#xE323;</i>
            Online Services
          </h4>
          <ul>
            <li>
              <a
                class="dept-link external-link"
                href="http://budget.acgov.org/"
                target="_blank"
                >Budget Portal</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ModalCao',
})
</script>

<style></style>
