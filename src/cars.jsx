const cars = [
  {
    id: 1,
    carModel: "Toyota Camry",
    carImg:
      "https://media.zigcdn.com/media/model/2023/Mar/front-1-4-left-2049679788_600x400.jpg",
    releaseYear: 2022,
    seater: 5,
    fuel: "Gasoline",
    mileage: "30 mpg",
    carMode: "Automatic",
    rent: 50,
  },
  {
    id: 2,
    carModel: "Honda Civic",
    carImg: "https://etimg.etb2bimg.com/photo/93028882.cms",
    releaseYear: 2021,
    seater: 5,
    fuel: "Gasoline",
    mileage: "32 mpg",
    carMode: "Automatic",
    rent: 45,
  },
  {
    id: 3,
    carModel: "Ford Mustang",
    carImg:
      "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2024/collections/equipment/3-2/24_FRD_MST_61047_32.jpg",
    releaseYear: 2023,
    seater: 4,
    fuel: "Gasoline",
    mileage: "25 mpg",
    carMode: "Manual",
    rent: 65,
  },
  {
    id: 4,
    carModel: "Chevrolet Tahoe",
    carImg:
      "https://www.motortrend.com/uploads/2023/02/2023-Chevrolet-Tahoe-Z71-012.jpg",
    releaseYear: 2022,
    seater: 7,
    fuel: "Gasoline",
    mileage: "18 mpg",
    carMode: "Automatic",
    rent: 80,
  },
  {
    id: 5,
    carModel: "Tesla Model 3",
    carImg:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Model-3/5251/1693556345148/front-left-side-47.jpg",
    releaseYear: 2021,
    seater: 5,
    fuel: "Electric",
    mileage: "280 miles",
    carMode: "Automatic",
    rent: 70,
  },
  {
    id: 6,
    carModel: "BMW X5",
    carImg:
      "https://stat.overdrive.in/wp-content/uploads/2023/07/BMW-X5-facelift-1.jpg",
    releaseYear: 2023,
    seater: 5,
    fuel: "Gasoline",
    mileage: "24 mpg",
    carMode: "Automatic",
    rent: 75,
  },
  {
    id: 7,
    carModel: "Audi Q5",
    carImg:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/Q5/10556/1689594416925/front-left-side-47.jpg",
    releaseYear: 2022,
    seater: 5,
    fuel: "Gasoline",
    mileage: "26 mpg",
    carMode: "Automatic",
    rent: 60,
  },
  {
    id: 8,
    carModel: "Jeep Wrangler",
    carImg:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Jeep/Wrangler/10944/1690625250497/front-left-side-47.jpg",
    releaseYear: 2021,
    seater: 4,
    fuel: "Gasoline",
    mileage: "20 mpg",
    carMode: "Manual",
    rent: 55,
  },
  {
    id: 9,
    carModel: "Nissan Altima",
    carImg:
      "https://www.carscoops.com/wp-content/uploads/2023/08/2023-Nissan-Altima-13aa.jpg",
    releaseYear: 2023,
    seater: 5,
    fuel: "Gasoline",
    mileage: "28 mpg",
    carMode: "Automatic",
    rent: 48,
  },
  {
    id: 10,
    carModel: "Hyundai Tucson",
    carImg:
      "https://feeds.abplive.com/onecms/images/uploaded-images/2022/08/10/ab235b8352a4f43246c556ab6f7f321c166012131990919_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
    releaseYear: 2022,
    seater: 5,
    fuel: "Gasoline",
    mileage: "29 mpg",
    carMode: "Automatic",
    rent: 52,
  },
  {
    id: 11,
    carModel: "Kia Sorento",
    carImg:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230102054522_Sorento.jpg&w=700&q=90&c=1",
    releaseYear: 2022,
    seater: 7,
    fuel: "Gasoline",
    mileage: "27 mpg",
    carMode: "Automatic",
    rent: 58,
  },
  {
    id: 12,
    carModel: "Subaru Outback",
    carImg:
      "https://media.ed.edmunds-media.com/subaru/outback/2024/oem/2024_subaru_outback_4dr-suv_onyx-edition-xt_fq_oem_1_1280.jpg",
    releaseYear: 2023,
    seater: 5,
    fuel: "Gasoline",
    mileage: "26 mpg",
    carMode: "Automatic",
    rent: 53,
  },
  {
    id: 13,
    carModel: "Mercedes-Benz C-Class",
    carImg:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220509113327_C_Class_opening_shot.jpg&w=726&h=482&q=75&c=1",
    releaseYear: 2021,
    seater: 5,
    fuel: "Gasoline",
    mileage: "28 mpg",
    carMode: "Automatic",
    rent: 75,
  },
  {
    id: 14,
    carModel: "Lexus RX",
    carImg:
      "https://www.lexusindia.co.in/content/dam/lexus-v3-blueprint/models/suv/rx/rx-350h/my23/overview/lexus-350h-overview-mgp.jpg",
    releaseYear: 2022,
    seater: 5,
    fuel: "Gasoline",
    mileage: "24 mpg",
    carMode: "Automatic",
    rent: 70,
  },
  {
    id: 15,
    carModel: "Volkswagen Golf",
    carImg:
      "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2021-Volkswagen-Golf-GTI-grey-1001x565-hero.JPG",
    releaseYear: 2023,
    seater: 5,
    fuel: "Gasoline",
    mileage: "31 mpg",
    carMode: "Automatic",
    rent: 47,
  },
  {
    id: 16,
    carModel: "Mazda CX-5",
    carImg:
      "https://www.cnet.com/a/img/resize/f36ef4ac6dd718d0969347d46028f7e4a5130e07/hub/2022/04/26/c488cccd-9e66-4beb-968d-e856ed8802d1/ogi-2022-mazda-cx-5-turbo-awd-02.jpg?auto=webp&fit=crop&height=675&width=1200",
    releaseYear: 2022,
    seater: 5,
    fuel: "Gasoline",
    mileage: "27 mpg",
    carMode: "Automatic",
    rent: 54,
  },
  {
    id: 17,
    carModel: "Tesla Model S",
    carImg: "https://etimg.etb2bimg.com/photo/98629540.cms",
    releaseYear: 2021,
    seater: 5,
    fuel: "Electric",
    mileage: "370 miles",
    carMode: "Automatic",
    rent: 90,
  },
  {
    id: 18,
    carModel: "Ford Focus",
    carImg:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20190220033711_fordfocusst_2019_5.jpg&w=700&q=90&c=1",
    releaseYear: 2022,
    seater: 5,
    fuel: "Gasoline",
    mileage: "28 mpg",
    carMode: "Automatic",
    rent: 49,
  },
  {
    id: 19,
    carModel: "Volvo XC90",
    carImg:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Volvo/XC-90/10588/1689924353443/front-left-side-47.jpg",
    releaseYear: 2022,
    seater: 7,
    fuel: "Gasoline",
    mileage: "25 mpg",
    carMode: "Automatic",
    rent: 68,
  },
  {
    id: 20,
    carModel: "Jaguar F-PACE",
    carImg:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202106/Jaguar_F-PACE_SVR_Exterior_01_1200x768.jpeg?size=690:388",
    releaseYear: 2023,
    seater: 5,
    fuel: "Gasoline",
    mileage: "29 mpg",
    carMode: "Automatic",
    rent: 78,
  },
  {
    id: 21,
    carModel: "Lamborghini Huracan",
    carImg:
      "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/2023/09_18_refresh/s/gw_hura_s_02.jpg",
    releaseYear: 2023,
    seater: 2,
    fuel: "Gasoline",
    mileage: "15 mpg",
    carMode: "Automatic",
    rent: 300,
  },
  {
    id: 22,
    carModel: "Ferrari 488 GTB",
    carImg: "https://i.insider.com/5731016652bcd063018c1e12?width=700",
    releaseYear: 2023,
    seater: 2,
    fuel: "Gasoline",
    mileage: "14 mpg",
    carMode: "Automatic",
    rent: 350,
  },
  {
    id: 23,
    carModel: "Porsche 911",
    carImg:
      "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/AU_local/2022/Products_AU/911-GTS--Product-Highlights/911-GTS-Australian-images---exterior-static/PORSCHE_TAYCANGTS_911GTS_DKIMG_0920.jpg/jcr:content/PORSCHE_TAYCANGTS_911GTS_DKIMG_0920.jpg",
    releaseYear: 2022,
    seater: 2,
    fuel: "Gasoline",
    mileage: "20 mpg",
    carMode: "Automatic",
    rent: 280,
  },
  {
    id: 24,
    carModel: "Ford Explorer",
    carImg:
      "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/explorer/2023/collections/equipments/3-2/21_FRD_EPR_07-EXPLORER-HYBRID_32.jpg/_jcr_content/renditions/cq5dam.web.768.768.jpeg",
    releaseYear: 2022,
    seater: 7,
    fuel: "Gasoline",
    mileage: "22 mpg",
    carMode: "Automatic",
    rent: 75,
  },
  {
    id: 25,
    carModel: "GMC Sierra",
    carImg:
      "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2022/05/GJ2022GMCSierra1500AT4XReviewBryonDorr-1.jpg",
    releaseYear: 2021,
    seater: 5,
    fuel: "Gasoline",
    mileage: "17 mpg",
    carMode: "Automatic",
    rent: 70,
  },
  {
    id: 26,
    carModel: "Subaru Forester",
    carImg:
      "https://editorial.pxcrush.net/carsales/general/editorial/subaru-forester-update-2-l86r.jpg?width=1024&height=683",
    releaseYear: 2023,
    seater: 5,
    fuel: "Gasoline",
    mileage: "28 mpg",
    carMode: "Automatic",
    rent: 50,
  },
  {
    id: 27,
    carModel: "Kia Sportage",
    carImg:
      "https://www.kbb.com/wp-content/uploads/2021/10/2023-Kia-Sportage-SX-white-driving-front-3qtr.jpg?w=918",
    releaseYear: 2022,
    seater: 5,
    fuel: "Gasoline",
    mileage: "27 mpg",
    carMode: "Automatic",
    rent: 48,
  },
  {
    id: 28,
    carModel: "Audi A4",
    carImg:
      "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220208104501_Audi_A4_LT_1.jpg",
    releaseYear: 2022,
    seater: 5,
    fuel: "Gasoline",
    mileage: "29 mpg",
    carMode: "Automatic",
    rent: 55,
  },
  {
    id: 29,
    carModel: "BMW 3 Series",
    carImg:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/3-Series/10574/1689667781970/front-left-side-47.jpg",
    releaseYear: 2021,
    seater: 5,
    fuel: "Gasoline",
    mileage: "30 mpg",
    carMode: "Automatic",
    rent: 60,
  },
  {
    id: 30,
    carModel: "Mercedes-Benz GLE",
    carImg:
      "https://www.mercedes-benz.co.in/content/india/en/passengercars/models/suv/gle/overview/_jcr_content/root/responsivegrid/tabs/tabitem/hotspot_module/hotspot_simple_image.component.damq1.3319573087076.jpg/mercedes-benz-gle-v167-exterior-hotspot-3302x1858-06-2022.jpg",
    releaseYear: 2022,
    seater: 5,
    fuel: "Gasoline",
    mileage: "28 mpg",
    carMode: "Automatic",
    rent: 70,
  },
  {
    id: 31,
    carModel: "Volkswagen Jetta",
    carImg:
      "https://photo.8891.com.tw/2015/08/06/s/1438824715091184_1400_0.jpg",
    releaseYear: 2022,
    seater: 5,
    fuel: "Gasoline",
    mileage: "32 mpg",
    carMode: "Automatic",
    rent: 46,
  },
  {
    id: 32,
    carModel: "Toyota RAV4",
    carImg:
      "https://mediacloud.carbuyer.co.uk/image/private/s--oHlX1E0A--/v1611575972/autoexpress/2021/01/Toyota%20RAV4%20plug-in%20hybrid%20-6.jpg",
    releaseYear: 2022,
    seater: 5,
    fuel: "Hybrid",
    mileage: "38 mpg",
    carMode: "Automatic",
    rent: 58,
  },
  {
    id: 33,
    carModel: "Chevrolet Equinox",
    carImg:
      "https://media.assets.ansira.net/websites/content/gmps-scottcars/blogs/e1e902ba5624433996a339f7f9093495.jpg",
    releaseYear: 2021,
    seater: 5,
    fuel: "Gasoline",
    mileage: "30 mpg",
    carMode: "Automatic",
    rent: 52,
  },
  {
    id: 34,
    carModel: "Subaru Impreza",
    carImg:
      "https://media.ed.edmunds-media.com/subaru/impreza/2022/oem/2022_subaru_impreza_4dr-hatchback_limited_fq_oem_1_1280.jpg",
    releaseYear: 2022,
    seater: 5,
    fuel: "Gasoline",
    mileage: "28 mpg",
    carMode: "Automatic",
    rent: 47,
  },
  {
    id: 35,
    carModel: "Audi A6",
    carImg:
      "https://www.motortrend.com/uploads/sites/5/2018/05/2019-Audi-A6-94-1.jpg?fit=around%7C875:492",
    releaseYear: 2023,
    seater: 5,
    fuel: "Gasoline",
    mileage: "29 mpg",
    carMode: "Automatic",
    rent: 62,
  },
  {
    id: 36,
    carModel: "Hyundai Sonata",
    carImg:
      "https://s1.cdn.autoevolution.com/images/news/2022-hyundai-sonata-n-line-night-edition-hits-dealers-with-sporty-visual-makeover-171588_1.jpg",
    releaseYear: 2022,
    seater: 5,
    fuel: "Gasoline",
    mileage: "31 mpg",
    carMode: "Automatic",
    rent: 49,
  },
  {
    id: 37,
    carModel: "Ford Escape",
    carImg:
      "https://media.ed.edmunds-media.com/ford/escape/2023/oem/2023_ford_escape_4dr-suv_plug-in-hybrid_fq_oem_1_1280.jpg",
    releaseYear: 2023,
    seater: 5,
    fuel: "Gasoline",
    mileage: "30 mpg",
    carMode: "Automatic",
    rent: 51,
  },
  {
    id: 38,
    carModel: "Honda Accord",
    carImg:
      "https://www.cnet.com/a/img/resize/8ed824e410b760de8aab88022c537bf00db5c6b7/hub/2022/11/09/34765dfd-4ef0-4f55-9c2a-80d943f97715/honda-accord-hybrid-2023-739229.jpg?auto=webp&width=1920",
    releaseYear: 2021,
    seater: 5,
    fuel: "Gasoline",
    mileage: "33 mpg",
    carMode: "Automatic",
    rent: 53,
  },
  {
    id: 39,
    carModel: "Kia Forte",
    carImg:
      "https://gaadiwaadi.com/wp-content/uploads/2021/10/2022-Kia-Forte.jpg",
    releaseYear: 2022,
    seater: 5,
    fuel: "Gasoline",
    mileage: "29 mpg",
    carMode: "Automatic",
    rent: 45,
  },
  {
    id: 40,
    carModel: "Jeep Grand Cherokee",
    carImg:
      "https://images.carexpert.com.au/app/uploads/2023/01/2017-jeep-grand-cherokee-limited.jpg",
    releaseYear: 2023,
    seater: 5,
    fuel: "Gasoline",
    mileage: "26 mpg",
    carMode: "Automatic",
    rent: 67,
  },
  {
    id: 41,
    carModel: "Nissan Rogue",
    carImg:
      "https://media.ed.edmunds-media.com/nissan/rogue/2022/oem/2022_nissan_rogue_4dr-suv_platinum_fq_oem_1_600.jpg",
    releaseYear: 2021,
    seater: 5,
    fuel: "Gasoline",
    mileage: "29 mpg",
    carMode: "Automatic",
    rent: 48,
  },
  {
    id: 42,
    carModel: "Tesla Model Y",
    carImg:
      "https://www.topgear.com/sites/default/files/2022/03/TopGear%20-%20Tesla%20Model%20Y%20-%20003.jpg",
    releaseYear: 2022,
    seater: 5,
    fuel: "Electric",
    mileage: "320 miles",
    carMode: "Automatic",
    rent: 75,
  },
];

export default cars;
