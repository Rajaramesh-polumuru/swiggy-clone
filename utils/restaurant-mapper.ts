export function mapRestaurantData(obj: {
  data: {
    data: {
      avgRating: any;
      cuisines: any;
      costForTwoString: any;
      uuid: any;
      locality: any;
      deliveryTime: any;
      name: any;
      veg: any;
      cloudinaryImageId: any;
    };
  };
}) {
  const {
    avgRating,
    cuisines,
    costForTwoString,
    uuid,
    locality,
    deliveryTime,
    name,
    veg,
    cloudinaryImageId,
  } = obj.data.data;

  return {
    avgRating,
    cuisines,
    costForTwoString,
    uuid,
    locality,
    deliveryTime,
    name,
    veg,
    imageSrc: `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`,
  };
}
