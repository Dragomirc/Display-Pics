import React from "react";
import renderer from "react-test-renderer";
import ColorCardList from "../../Components/ColorCardList";
import ColorCard from "../../Components/ColorCard";
import ImageCard from "../../Components/ImageCard";
import ImageCardList from "../../Components/ImageCardList";
import App from "../../Components/App";

it("App renders without crashing", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("App renders 4 x ColorCards", () => {
  const component = renderer
    .create(<ColorCardList color={"green"} info={jest.fn()} color={"green"} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});

it("ColorCard renders an li element", () => {
  const component = renderer
    .create(<ColorCard style={"green"} info={jest.fn()} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});

it("ImageCard renders an li with one image child and one anchor element", () => {
  const component = renderer.create(<ImageCard />).toJSON();
  expect(component).toMatchSnapshot();
});

it("App should render with 5 x ImageCard components when the state is updated", () => {
  const tree = renderer.create(<App />);
  tree.getInstance().handleChange(mockApiResponse);
  expect(tree.toJSON()).toMatchSnapshot();
});
const mockApiResponse = {
  totalHits: 5,
  hits: [
    {
      previewHeight: 107,
      likes: 9,
      favorites: 12,
      tags: "domestic, cat, little",
      webformatHeight: 458,
      views: 1205,
      webformatWidth: 640,
      previewWidth: 150,
      comments: 4,
      downloads: 743,
      pageURL:
        "https://pixabay.com/en/domestic-cat-little-cute-kitten-3133620/",
      previewURL:
        "https://cdn.pixabay.com/photo/2018/02/06/00/20/domestic-3133620_150.jpg",
      webformatURL:
        "https://pixabay.com/get/ea34b20c2ef6013ed95c4518b74b4f9fe175e5d604b014409df3c77da3ecb2_640.jpg",
      imageWidth: 4096,
      user_id: 752536,
      user: "Desertrose7",
      type: "photo",
      id: 3133620,
      userImageURL:
        "https://cdn.pixabay.com/user/2016/03/14/13-25-18-933_250x250.jpg",
      imageHeight: 2936
    },
    {
      previewHeight: 91,
      likes: 49,
      favorites: 28,
      tags: "cat, red, cute",
      webformatHeight: 392,
      views: 5097,
      webformatWidth: 640,
      previewWidth: 150,
      comments: 25,
      downloads: 3323,
      pageURL:
        "https://pixabay.com/en/cat-red-cute-mackerel-tiger-sweet-3080965/",
      previewURL:
        "https://cdn.pixabay.com/photo/2018/01/13/23/28/cat-3080965_150.jpg",
      webformatURL:
        "https://pixabay.com/get/ea35b90f21f2043ed95c4518b74b4f9fe175e5d604b014409df3c77da3ecb2_640.jpg",
      imageWidth: 4464,
      user_id: 686414,
      user: "Alexas_Fotos",
      type: "photo",
      id: 3080965,
      userImageURL:
        "https://cdn.pixabay.com/user/2018/02/07/15-07-53-496_250x250.jpg",
      imageHeight: 2740
    },
    {
      previewHeight: 120,
      likes: 206,
      favorites: 191,
      tags: "cat, red, cute",
      webformatHeight: 513,
      views: 35130,
      webformatWidth: 640,
      previewWidth: 150,
      comments: 24,
      downloads: 19979,
      pageURL:
        "https://pixabay.com/en/cat-red-cute-mackerel-tiger-sweet-1652880/",
      previewURL:
        "https://cdn.pixabay.com/photo/2016/09/07/23/10/cat-1652880_150.jpg",
      webformatURL:
        "https://pixabay.com/get/e833b40d20fc013ed95c4518b74b4f9fe175e5d604b014409df3c77da3ecb2_640.jpg",
      imageWidth: 2116,
      user_id: 686414,
      user: "Alexas_Fotos",
      type: "photo",
      id: 1652880,
      userImageURL:
        "https://cdn.pixabay.com/user/2018/02/07/15-07-53-496_250x250.jpg",
      imageHeight: 1698
    },
    {
      previewHeight: 95,
      likes: 39,
      favorites: 19,
      tags: "cat, red, sleep",
      webformatHeight: 408,
      views: 2509,
      webformatWidth: 640,
      previewWidth: 150,
      comments: 16,
      downloads: 1663,
      pageURL:
        "https://pixabay.com/en/cat-red-sleep-cute-mackerel-tiger-3080966/",
      previewURL:
        "https://cdn.pixabay.com/photo/2018/01/13/23/28/cat-3080966_150.jpg",
      webformatURL:
        "https://pixabay.com/get/ea35b90f21f2073ed95c4518b74b4f9fe175e5d604b014409df3c77da3ecb2_640.jpg",
      imageWidth: 5047,
      user_id: 686414,
      user: "Alexas_Fotos",
      type: "photo",
      id: 3080966,
      userImageURL:
        "https://cdn.pixabay.com/user/2018/02/07/15-07-53-496_250x250.jpg",
      imageHeight: 3223
    },
    {
      previewHeight: 99,
      likes: 242,
      favorites: 217,
      tags: "cat, wink, funny",
      webformatHeight: 425,
      views: 69715,
      webformatWidth: 640,
      previewWidth: 150,
      comments: 39,
      downloads: 36848,
      pageURL: "https://pixabay.com/en/cat-wink-funny-fur-animal-red-1333926/",
      previewURL:
        "https://cdn.pixabay.com/photo/2016/04/16/23/07/cat-1333926_150.jpg",
      webformatURL:
        "https://pixabay.com/get/e836b20c21f6073ed95c4518b74b4f9fe175e5d604b014409df3c77da3ecb2_640.jpg",
      imageWidth: 2808,
      user_id: 686414,
      user: "Alexas_Fotos",
      type: "photo",
      id: 1333926,
      userImageURL:
        "https://cdn.pixabay.com/user/2018/02/07/15-07-53-496_250x250.jpg",
      imageHeight: 1867
    }
  ],
  total: 5
};
