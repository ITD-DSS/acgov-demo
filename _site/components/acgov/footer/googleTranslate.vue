<template>
  <div
    id="modal-trans"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="Disclaimer Info"
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
          <h3 id="myModalLabel" class="modal-title">Translate this Page</h3>
        </div>
        <div class="modal-body deptinfo">
          <h4>Disclaimer</h4>
          <p>
            Translation of pages on ACGOV.org is performed by Google Translate,
            a third party service which Alameda County has no control over. The
            service provides automated computer translations that are only an
            approximation of the websites' original content.
          </p>

          <p />
          <p>
            Alameda County does not warrant the accuracy, reliability, or
            timeliness of any information translated by Google Translate. These
            translations should not be considered exact renderings of the
            original ACGOV.org site. Some portions of the site will not be
            translated at all, which includes but is not limited to buttons,
            graphics, photos, and video content.
          </p>

          <br />
          <div id="google_translate_element" style=""></div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoogleTranslate',
}
</script>

<style></style>
