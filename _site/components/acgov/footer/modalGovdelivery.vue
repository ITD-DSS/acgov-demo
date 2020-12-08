<template>
  <div
    id="modal-govd"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="Email subscription sign-up"
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
            <i class="material-icons md-36 md-vertical-middle">&#xE0be;</i>
            Get Email Updates
          </h3>
        </div>
        <div class="modal-body deptinfo">
          <form
            id="GD-snippet-form"
            action="https://public.govdelivery.com/accounts/CAALAME/subscribers/qualify"
            accept-charset="UTF-8"
            method="post"
          >
            <input name="utf8" type="hidden" value="✓" />
            <input
              type="hidden"
              name="authenticity_token"
              value="Og1izipZAapbmVioBvav08Yp6RF2enmpMVaUvFUWIgWjE8h632WdH4pZz4jP0NJoSB6RtqPGddhUnED3QpqZSQ=="
            />
            <input
              id="topic_id"
              type="hidden"
              name="topic_id"
              value="CAALAME_1"
            />
            <fieldset>
              <div>
                <p>Stay connected.</p>
                <p>Stay informed.</p>
                <p>
                  Get an email whenever County news is updated. To sign up for
                  updates or to access your subscriber preferences, please enter
                  your contact information below.
                </p>
              </div>
              <br />
              <ol class="form">
                <li class="email_fields" style="display: block">
                  <label for="email">Email Address</label>
                  <input id="email" type="text" name="email" class="long" />
                </li>
              </ol>
              <div class="button_panel">
                <input
                  type="submit"
                  name="commit"
                  value="Subscribe"
                  class="form_button"
                />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalGovdelivery',
}
</script>

<style></style>
