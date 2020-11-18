<template>
  <div
    id="modal-bos"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="Board of Supervisors District 1 Info"
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
          <h3 id="myModalLabel" class="modal-title">Board of Supervisors</h3>
        </div>
        <div class="modal-body deptinfo">
          <a class="dept-phone" href="tel:510-272-6984"
            ><i class="material-icons md-48">&#xE0cd;</i></a
          ><a
            class="dept-map"
            target="_blank"
            href="https://goo.gl/maps/ASWeNCXLefr"
            ><i class="material-icons md-48">&#xE52E;</i></a
          >
          <p class="dept-address">
            County Office<br />
            1221 Oak Street, Room 536<br />
            Oakland, CA 94612<br />
            510.272.6984
          </p>
          <h4 class="deptlinks">
            <i class="material-icons md-36 md-vertical-middle">&#xE157;</i>
            Links
          </h4>
          <ul>
            <li>
              <a class="dept-link" href="/board/"
                >Board of Supervisors Website</a
              >
            </li>
            <li>
              <a class="dept-link" href="/board/district1/"
                >District 1 Website</a
              >
            </li>
            <li>
              <a class="dept-link" href="/board/district2/"
                >District 2 Website</a
              >
            </li>
            <li>
              <a class="dept-link" href="/board/district3/"
                >District 3 Website</a
              >
            </li>
            <li>
              <a class="dept-link" href="/board/district4/"
                >District 4 Website</a
              >
            </li>
            <li>
              <a class="dept-link" href="/board/district5/"
                >District 5 Website</a
              >
            </li>
          </ul>
          <h4 class="deptlinks">
            <i class="material-icons md-36 md-vertical-middle">&#xE323;</i>
            Online Services
          </h4>
          <ul>
            <li>
              <a class="dept-link" href="/ms/addresslookup/Default.aspx"
                >Lookup Your District</a
              >
            </li>
            <li>
              <a class="dept-link" href="/board/broadcast.htm"
                >Watch Board Meetings</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalBos',
}
</script>

<style></style>
