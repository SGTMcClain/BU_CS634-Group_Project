import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  blogText = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!',
    'In this anime, Tamaki Mari partners with her friend Shirase Kobuchizawa on an adventure to Antarctica. This coming of age series is sentimental and an overall feel-good anime. With artistic animations and well composed character journeys, this has been my favorite series of 2018. ',
    'If you have been following this series since its beginning you will come to appreciate the coming of age of the case. Long gone are their high school days as they try to find themselves. Packed with more drama than previous season the conflict among characters leads to their growth. If you haven’t seen the first Free! Series, I would definitely recommend watching the first, it will make Dive to the Future even better Available on Crunchyroll',
    'Design by Kazunori Iwakura and composed by Satoshi Mizukami, this series is a fresh twist on anime comic. The series reveals its themes of heroism, the bond between which we call our family, and the mecha and sentai Japanese traditions. Each episode of this series has complex storyline and I was never disappointed. Let me know what you think! Available on Crunchyroll',
    'Originally thought of as an anniversary spin-off of the classic series Ashita no Joe, this series depicts the divide between the poor and the modern. Junk Dog is a young man who brings a new perspective to the boxing world. The music, the message, and the art will be sure to inspire you as it did me! Available on Crunchyroll',
    'Directed by HIroshi Kobayashi, this distinctive film stands out for its depiction of sexism in institutions like the military, role tradition, and the glass ceiling. Histrone steals the spotlight as a young women who is not one to stand in the shadows. This movie reveals the constant struggle to find a balance between professional and personal life. With complex military systems, themes of feminism, and unpredictable humor you have to give this a watch! Available on Netflix'
  ];
  blogTitles = [
    'First Post',
    'Second Post',
    'Third Post',
    'Fourth Post',
    'Fifth Post',
    'My 5 Must-Watch Anime Series of 2018'
  ];
  aziziAuthor: string = 'Azizi Gibson';

  constructor() { }

  ngOnInit() {
  }

}
