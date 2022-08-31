<template>
  <div class="timeline-component"> 
        <div class="timeline-box">
            <div class="timeline-item-box" v-for="(item, index) of items" :key="`timeline-item-box-${index}`">
                <div class="timeline-item">
                    <h3 class="timeline-item-title">{{item.date}}</h3>
                    <p class="timeline-item-text">{{item.text}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Timeline",
    props: {
        items: {
            type: Array,
            required: true,
            /* Expected format:
            [
                {date: ____, text: ____},
                {date: ____, text: ____},
                {date: ____, text: ____},
                {date: ____, text: ____},
            ]
            */
        }
    }

}
</script>

<style scoped>





/* Timeline Container */
.timeline-component {
  padding: 20px;
  display: flex;
 
  justify-content: center;
  

}

/* Outer Layer with the timeline border */
.timeline-box {
  border-left: 5px solid var(--palette-green);
}

/* Card container */
.timeline-item-box {
  position: relative;
  margin: 0 0 20px 20px;
  padding: 10px;
  background: var(--palette-soft-blue);
  color: var(--palette-green-dark);
  width: 100%;
  max-width: 400px;
}

/* Information about the timeline */
.timeline-item {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

/* Title of the card */
.timeline-item-title {
  color: var(--palette-green-dark);
  position: relative;
  font-family: "Oswald";
  font-weight: 600;
  font-size: 25px;
  letter-spacing: 1.1px;
}

/* Timeline dot  */
.timeline-item-title::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background: var(--palette-green);
  border-radius: 999px;
  left: -40px;
  border: 3px solid var(--palette-green);
}

.timeline-item-text {
  font-family: "Poppins";
  font-weight: 300;
  letter-spacing: 1.1px;
  line-height: 1.2rem;
}


</style>