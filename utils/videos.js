import fs from "fs";
import path from "path";

const videoDirectory = path.join(process.cwd(), "videos/videos.json");

// get metadata for all videos
export function getAllVideoData() {
  const rawVideoData = fs.readFileSync(videoDirectory);
  const parsedVideoData = JSON.parse(rawVideoData);

  /* Data looks like this:
  [
    {
      id:
      title:
      description:
      url:
      thumbnail_large:
      ...
    }
  ]
  */

  // shorten long descriptions
  const truncate = (input) => {
    return input?.length > 300 ? `${input.substring(0, 250)}...` : input;
  };

  const allVideoData = parsedVideoData.map((video) => {
    const teaser = truncate(video.description);
    const { id, title, url, thumbnail_large } = video;

    return {
      id,
      title,
      teaser,
      url,
      thumbnail_large,
    };
  });

  return allVideoData;
}

// get ids for all videos
export function getAllVideoIds() {
  const rawVideoData = fs.readFileSync(videoDirectory);
  const parsedVideoData = JSON.parse(rawVideoData);

  return parsedVideoData.map((video) => {
    const { id } = video;

    return {
      params: {
        id: id.toString(),
      },
    };
  });
}

// get video meta data for a single video
export function getVideoData(id) {
  const rawVideoData = fs.readFileSync(videoDirectory);
  const parsedVideoData = JSON.parse(rawVideoData);

  const videoData = parsedVideoData.filter((video) => video.id == id);

  return videoData;
}
