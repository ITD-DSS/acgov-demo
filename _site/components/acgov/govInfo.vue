<template>
  <div class="row gov">
    <div class="col-sm-6 board-photo">
      <a href="#" data-toggle="modal" data-target="#modal-bos">
        <img
          id="bos"
          class="img-responsive center-block"
          src="/img/bos.jpg"
          alt="Photo collage of the Board of Supervisors showing: Scott Haggerty-District 1, Richard Valle-District 2, Wilma Cha-District 3, Nate Miley-District 4, Keith Carson-District 5. "
        />
      </a>
    </div>
    <div class="col-sm-6 gov-links">
      <ul>
        <li>
          <a href="government/departments.htm">Agencies &amp; Departments</a>
        </li>
        <li>
          <a href="/board/broadcast.htm"
            >Board of Supervisors Meetings / Broadcasts / Current Meeting
            Agenda</a
          >
        </li>
        <li>
          <a href="/cda/planning/meetings/broadcast.htm"
            >Planning Department Meeting Broadcasts</a
          >
        </li>
        <!--<li><a href="/government/boards.htm">Boards &amp; Commissions</a></li>-->
        <li>
          <a href="#" data-toggle="modal" data-target="#modal-cao"
            >County Administrator's Office</a
          >
        </li>
        <li>
          <a href="government/elected.htm">Elected Officials</a>
        </li>
        <li>
          <a href="government/programs.htm">Programs &amp; Initiatives</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GovInfo',
}
</script>

<style></style>
