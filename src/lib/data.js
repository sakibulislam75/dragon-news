export const allCategory = async () => {
   try {
      const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
      if (!res.ok) {
         throw new Error('Network response was not ok');
      }
      const data = await res.json();
      return data.data;
   } catch (error) {
      throw new Error('Failed to fetch categories');
   }
};

export const getCategoryNews = async (categoryId) => {
   try {
      const res = await fetch(
         `https://openapi.programming-hero.com/api/news/category/${categoryId}`,
      );
      const data = await res.json();
      return data.data;
   } catch (error) {
      throw new Error('Failed to fetch category news');
   }
};

export const getNewsDetails = async (news_Id) => {
   try {
      const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_Id}`);
      const data = await res.json();
      /*
       * API সবসময় Array return করে কিন্তু
       * Details page এ আমাদের একটাই news দরকার
       * তাই [0] দিয়ে Array থেকে প্রথম item টা নিচ্ছি
       */
      return data.data[0];
   } catch (error) {
      throw new Error('Failed to fetch category news');
   }
};
