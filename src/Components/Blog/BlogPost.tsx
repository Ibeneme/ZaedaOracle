import weatherPatternsImage from "../../assets/StartPage/studio.jpg";
import climateChangeImage from "../../assets/StartPage/office.jpg";
import hurricanesImage from "../../assets/StartPage/bw.jpg";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  content?: string; // Optional, used for detailed page
  date: string; // Add date property
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Weather Patterns",
    excerpt:
      "Explore the different weather patterns and how they affect our daily lives.",
    image: weatherPatternsImage,
    content: `
      <p style="color: #666">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula mi eget ligula malesuada, at bibendum libero dictum. Maecenas vel neque id odio bibendum tristique. Proin nec libero non odio scelerisque pharetra ut ac ex. Integer blandit eros et dolor ultrices, sed dapibus sapien laoreet. Nulla facilisi. Nulla vel dolor nec nisi finibus malesuada. Curabitur fermentum nunc euismod, facilisis metus sit amet, tincidunt ligula.</p>
      
   
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
         
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
         
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
      
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
      `,

    date: "Friday, 9th August 2024, 02:34pm",
  },
  {
    id: 2,
    title: "How Climate Change Impacts Weather",
    excerpt:
      "Learn about the effects of climate change on global weather conditions.",
    image: climateChangeImage,
    content: `
      <p style="color: #666">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula mi eget ligula malesuada, at bibendum libero dictum. Maecenas vel neque id odio bibendum tristique. Proin nec libero non odio scelerisque pharetra ut ac ex. Integer blandit eros et dolor ultrices, sed dapibus sapien laoreet. Nulla facilisi. Nulla vel dolor nec nisi finibus malesuada. Curabitur fermentum nunc euismod, facilisis metus sit amet, tincidunt ligula.</p>
      
   
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
         
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
         
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
      
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
      `,

    date: "Monday, 12th August 2024, 09:15am",
  },
  {
    id: 3,
    title: "The Science Behind Hurricanes",
    excerpt: "Dive into the science of hurricanes and their formation.",
    image: hurricanesImage,
    content: `
      <p style="color: #666">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula mi eget ligula malesuada, at bibendum libero dictum. Maecenas vel neque id odio bibendum tristique. Proin nec libero non odio scelerisque pharetra ut ac ex. Integer blandit eros et dolor ultrices, sed dapibus sapien laoreet. Nulla facilisi. Nulla vel dolor nec nisi finibus malesuada. Curabitur fermentum nunc euismod, facilisis metus sit amet, tincidunt ligula.</p>
      
   
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
         
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
         
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
      
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
      `,

    date: "Tuesday, 13th August 2024, 07:50pm",
  },
  {
    id: 3,
    title: "The Science Behind Hurricanes",
    excerpt: "Dive into the science of hurricanes and their formation.",
    image: hurricanesImage,
    content: `
      <p style="color: #666">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula mi eget ligula malesuada, at bibendum libero dictum. Maecenas vel neque id odio bibendum tristique. Proin nec libero non odio scelerisque pharetra ut ac ex. Integer blandit eros et dolor ultrices, sed dapibus sapien laoreet. Nulla facilisi. Nulla vel dolor nec nisi finibus malesuada. Curabitur fermentum nunc euismod, facilisis metus sit amet, tincidunt ligula.</p>
      
   
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
         
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
         
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
      
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
      `,

    date: "Tuesday, 13th August 2024, 07:50pm",
  },
  {
    id: 3,
    title: "The Science Behind Hurricanes",
    excerpt: "Dive into the science of hurricanes and their formation.",
    image: hurricanesImage,
    content: `
      <p style="color: #666">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula mi eget ligula malesuada, at bibendum libero dictum. Maecenas vel neque id odio bibendum tristique. Proin nec libero non odio scelerisque pharetra ut ac ex. Integer blandit eros et dolor ultrices, sed dapibus sapien laoreet. Nulla facilisi. Nulla vel dolor nec nisi finibus malesuada. Curabitur fermentum nunc euismod, facilisis metus sit amet, tincidunt ligula.</p>
      
   
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
         
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
         
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
      
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
      `,

    date: "Tuesday, 13th August 2024, 07:50pm",
  },
  {
    id: 3,
    title: "The Science Behind Hurricanes",
    excerpt: "Dive into the science of hurricanes and their formation.",
    image: hurricanesImage,
    content: `
      <p style="color: #666">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula mi eget ligula malesuada, at bibendum libero dictum. Maecenas vel neque id odio bibendum tristique. Proin nec libero non odio scelerisque pharetra ut ac ex. Integer blandit eros et dolor ultrices, sed dapibus sapien laoreet. Nulla facilisi. Nulla vel dolor nec nisi finibus malesuada. Curabitur fermentum nunc euismod, facilisis metus sit amet, tincidunt ligula.</p>
      
   
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
         
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
         
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
      
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
      `,

    date: "Tuesday, 13th August 2024, 07:50pm",
  },
  {
    id: 3,
    title: "The Science Behind Hurricanes",
    excerpt: "Dive into the science of hurricanes and their formation.",
    image: hurricanesImage,
    content: `
      <p style="color: #666">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula mi eget ligula malesuada, at bibendum libero dictum. Maecenas vel neque id odio bibendum tristique. Proin nec libero non odio scelerisque pharetra ut ac ex. Integer blandit eros et dolor ultrices, sed dapibus sapien laoreet. Nulla facilisi. Nulla vel dolor nec nisi finibus malesuada. Curabitur fermentum nunc euismod, facilisis metus sit amet, tincidunt ligula.</p>
      
   
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
         
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
         
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
      
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
      `,

    date: "Tuesday, 13th August 2024, 07:50pm",
  },

  {
    id: 3,
    title: "The Science Behind Hurricanes",
    excerpt: "Dive into the science of hurricanes and their formation.",
    image: hurricanesImage,
    content: `
      <p style="color: #666">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula mi eget ligula malesuada, at bibendum libero dictum. Maecenas vel neque id odio bibendum tristique. Proin nec libero non odio scelerisque pharetra ut ac ex. Integer blandit eros et dolor ultrices, sed dapibus sapien laoreet. Nulla facilisi. Nulla vel dolor nec nisi finibus malesuada. Curabitur fermentum nunc euismod, facilisis metus sit amet, tincidunt ligula.</p>
      
   
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
         
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
         
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
      
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
      `,

    date: "Tuesday, 13th August 2024, 07:50pm",
  },
  {
    id: 3,
    title: "The Science Behind Hurricanes",
    excerpt: "Dive into the science of hurricanes and their formation.",
    image: hurricanesImage,
    content: `
      <p style="color: #666">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula mi eget ligula malesuada, at bibendum libero dictum. Maecenas vel neque id odio bibendum tristique. Proin nec libero non odio scelerisque pharetra ut ac ex. Integer blandit eros et dolor ultrices, sed dapibus sapien laoreet. Nulla facilisi. Nulla vel dolor nec nisi finibus malesuada. Curabitur fermentum nunc euismod, facilisis metus sit amet, tincidunt ligula.</p>
      
   
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
         
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
         
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
   
      
      <p style="color: #666">Luspendisse non orci in leo suscipit venenatis. In nec tellus a lectus eleifend sagittis. Mauris sit amet augue nec lectus volutpat fermentum. Sed bibendum dignissim nulla, vel aliquet eros aliquam non. Donec gravida gravida metus, sit amet efficitur ex posuere et. Sed nec consequat odio. Aliquam erat volutpat. Duis eget urna eget odio pulvinar accumsan sed at nisi. Integer auctor turpis nec sapien convallis, sit amet dictum turpis vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean at ullamcorper dui, at consequat est.</p>
      `,

    date: "Tuesday, 13th August 2024, 07:50pm",
  },
];
