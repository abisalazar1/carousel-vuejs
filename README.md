# carousel-vuejs

Basic Use

- Add the vue component into you component lists and compile.
- call the component <vue-carousel></vue-carousel>
- send an array of images or objects.
- Set overlay if there's text by default is set to true.
- timer is set to 5 seconds by default.


 ```
  <vue-carousel
        :images="[
        'http://ichef-1.bbci.co.uk/news/976/media/images/83351000/jpg/_83351965_explorer273lincolnshirewoldssouthpicturebynicholassilkstone.jpg',
        'http://picpulp.com/wp-content/uploads/2013/03/81.jpg?x11708',
        'http://webneel.com/daily/sites/default/files/images/daily/05-2014/12-sunrise-picture.jpg',
        'http://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=6&m=517188688&s=612x612&w=0&h=jQKl_eDUwg4hCXjl4X5i6FPuTw-V-NfEOtLkvsrgC3Y='
        ]" :overlay="false" :timer="8000">

    </vue-carousel>


   <vue-carousel :images="[ {
        image:'http://picpulp.com/wp-content/uploads/2013/03/81.jpg?x11708',
        title: 'This is title number 1',
        subtitle: 'this is subtitle number 1'
  },
  {
        image:'http://webneel.com/daily/sites/default/files/images/daily/05-2014/12-sunrise-picture.jpg',
        title: 'This is title number 2',
        subtitle: 'this is subtitle number 2'
  },
   {
        image:'http://ichef-1.bbci.co.uk/news/976/media/images/83351000/jpg/_83351965_explorer273lincolnshirewoldssouthpicturebynicholassilkstone.jpg',
        title: 'This is title number 3',
        subtitle: 'this is subtitle number 3'
  }]">

                </vue-carousel>
  ```
