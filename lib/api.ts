import { databases } from './appwrite';

const gettId1Collection = async () => {
  const qrData = await databases.listDocuments('carouselDb1', 'id1collection');
  console.log(qrData);
};

export default gettId1Collection;
