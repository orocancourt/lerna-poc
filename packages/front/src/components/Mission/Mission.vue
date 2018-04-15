<template>
  <article id="mission">
    <header>
      <p class="header accepted">accepté</p>
    </header>
    <main class="missionMain">
      <!-- CDI start -->
      <div class="missionType">
        <p class="missionType accepted">cdi</p>
      </div>
      <hr class="separator accepted">
      <div class="hours">
        <p>
          <time>8:00</time>-<time>17:00</time>
        </p>
      </div>
      <div class="candidate">
        <p>J-A. Gaston</p>
      </div>
      <hr class="separator accepted">
      <div class="hours">
        <p>
          <time>8:00</time>-<time>17:00</time>
        </p>
      </div>
      <div class="candidate">
        <p>A. Batman</p>
      </div>
      <!-- CDI start -->
      <!-- interim AM start -->
      <div class="missionType">
        <p class="missionType accepted">intérim AM</p>
      </div>
      <hr class="separator accepted">
      <div class="hours">
        <p>
          <time>8:00</time>-<time>17:00</time>
        </p>
      </div>
      <div class="candidate">
        <p>J-A. Gaston</p>
      </div>
      <!-- interim AM end -->
    </main>
  </article>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'Mission',
    props: {
      missionDate: {
        type: Object,
        default: () => moment(),
      },
    },
  }
</script>

<style lang="scss">
  #mission {
    font-size: 12px;
    text-align: left;
    margin-top: 12px;
  }

  div.missionType {
    margin-top: 8px;
  }

  p.header.accepted {
    background-color: $accepted;
    color: white;
    border-radius: 3px;
    height: 30px;
    padding-left: 5px;
    padding-top: 7px;
    margin-bottom: 0;
    margin-left: 1px;
    margin-right: 1px;
  }

  main.missionMain {
    width: 85%;
    margin: auto;
  }

  .missionMain .accepted {
    color: $accepted;
  }

  hr.separator {
    border: 0.5px solid;
  }
  p.missionType {
    margin-bottom: 0;
  }

  .hours {
    margin-top: 4px;
    font-weight: bold;
    color: $missionFontGrey;
  }

  .hours p {
    margin-bottom: 0;
  }

  .candidate {
    color: $missionFontGrey;
    margin-bottom: 4px;
  }

  .candidate p {
    margin-bottom: 0
  }

</style>
