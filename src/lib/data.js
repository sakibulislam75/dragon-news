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
