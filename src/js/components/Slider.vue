<template>
    <div>

        <div class="slideshow-container">

            <div v-for="slide in slides" key="slide.index" class="Slides fade"
                 :class="{ 'slideActive' : slide.isActive }">
                <div class="numbertext">{{ slide.index }} / {{ slides.length}}</div>
                <img :src="slide.img" style="width:100%">
                <!--<div class="text">Caption Text</div>-->
                <a class="prev" @click="previousSlide(slide)">&#10094;</a>
                <a class="next" @click="nextSlide(slide)">&#10095;</a>
            </div>
        </div>
        <br>

        <div style="text-align:center">
            <span v-for="slide in slides" key="slide.index" class="dot" @click="showSlide(slide)"></span>
        </div>
    </div>
</template>

<script>

export default {
    props : {
          images: {
            default : () => { return [] },
            type: Array
          }
         },
    data() {
        return{
            slides : []
        }
    },
    methods : {

        nextSlide (slide)  {

            slide.isActive = false;

            return (this.slides.length != slide.index)? this.slideFinder (slide.index+1) : this.slideFinder (1);
        },
        previousSlide (slide) {

            slide.isActive = false;

            return (slide.index == 1)? this.slideFinder (this.slides.length) : this.slideFinder (slide.index-1);
        },
        slideFinder (condition) {
            this.slides.forEach( ( index ) => {
                if ( index.index == condition ) {
                    index.isActive = true;
                }
            });
        },
        showSlide (slide) {
            this.slides.forEach( ( index ) => {
                index.isActive = false;
            });
            slide.isActive = true;
        }

    },
    created () {
        this.images.forEach((item , index) => {
            return (index == 0 )? this.slides.push({
                index: index+1,
                img: item,
                isActive: true
            }): this.slides.push({
                index: index+1,
                img: item,
                isActive: false
            });

        });




    }
}





</script>
