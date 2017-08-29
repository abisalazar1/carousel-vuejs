<template>
    <div>

        <div class="slideshow-container">

            <div v-for="slide in slides" key="slide.index" class="Slides fade in"
                 :class="{ 'slideActive' : slide.isActive }">
                <div class="sliderOverlay" v-show="overlay"></div>
                <div class="numbertext">{{ slide.index }} / {{ slides.length}}</div>
                <img :src="slide.img" style="width:100%">
                <div class="sliderTitle">{{ slide.title }}</div>
                <div class="sliderText">{{ slide.subtitle }}</div>
                <a class="prev" @click="previousSlide(slide)">&#10094;</a>
                <a class="next" @click="nextSlide(slide)" >&#10095;</a>
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
          },
          timer: {
            default : 5000,
            type: Number
          },
          overlay : {
            default: true,
            type: Boolean
          }
         },
    data() {
        return{
            slides : [],
            counter: 0
        }
    },
    methods : {
        init () {
            this.slides[this.counter].isActive = true;
            setInterval(() => {

                this.showSlide(this.slides[this.counter]);
                if (this.counter < this.slides.length-1){
                    this.counter++
                } else {
                    this.counter = 0;
                }
            }, this.timer);
        },
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
        },
        transformObject (item , index) {
           return this.slides.push({
                index: index+1,
                img: item.image,
                title: item.title,
                subtitle: item.subtitle,
                isActive: false
            });
        },
        transformArray (item , index ) {
            return this.slides.push({
                index: index+1,
                img: item,
                title: '',
                subtitle: '',
                isActive: false
             });

        }
    },
    created () {

        this.images.forEach((item , index) => {
           return ( item instanceof Object)? this.transformObject(item ,index) : this.transformArray (item , index );
        });
           this.init();


    }
}
</script>