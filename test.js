const arr = [
  {
    id: "33",
    type: "features",
    attributes: {
      id: 33,
      featureable_type: "BxBlockNft::Nft",
      featureable_id: 165,
      featureable: {
        data: {
          id: "165",
          type: "nft",
          attributes: {
            id: 165,
            account_id: 765,
            name: "Demo",
            description: "Demo",
            price: 1234,
            link: "Demo",
            approval: true,
            created_at: "2024-06-13T03:45:09.998-04:00",
            expired_at: "2024-06-20",
            views: 30,
            updated_at: "2024-06-17T03:29:44.589-04:00",
            is_faviroute: false,
            images: [
              {
                id: 1791,
                url: "https://nickcoingophase1v2-158847-ruby.b158847.dev.eastus.az.svc.builder.cafe/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdjhHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--12545c7cda527b3aae345ac1ff5bfb676f890c98/image",
                type: "image",
                filename: "image",
              },
            ],
          },
        },
      },
    },
  },
  {
    id: "34",
    type: "features",
    attributes: {
      id: 34,
      featureable_type: "BxBlockNews::CreateNews",
      featureable_id: 11,
      featureable: {
        data: {
          id: "11",
          type: "news",
          attributes: {
            title: "form",
            text: "demo",
            source_name: "admin",
            date: "2024-06-13T06:25:28.094-04:00",
            image:
              "https://minio.b158847.dev.eastus.az.svc.builder.cafe/sbucket/ef7nykiwi6k4q5i5s3b61n0h89a9?response-content-disposition=inline%3B%20filename%3D%22checked.png%22%3B%20filename%2A%3DUTF-8%27%27checked.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=hello%2F20240617%2Fbuilder-1%2Fs3%2Faws4_request&X-Amz-Date=20240617T110424Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=fb5c49192a920905d72af8730b3c8c0308e399fa3fdda8fe3da43dd65f5ebd46",
            views: null,
            is_faviroute: false,
          },
        },
      },
    },
  },
  {
    id: "35",
    type: "features",
    attributes: {
      id: 35,
      featureable_type: "BxBlockVideo::YoutubeVideo",
      featureable_id: 53,
      featureable: {
        data: {
          id: "53",
          type: "youtube_video",
          attributes: {
            id: 53,
            video_url: "",
            video_id: null,
            title: "kids",
            description: "demo",
            views: 3,
            created_at: "2024-06-13T06:25:11.908-04:00",
            updated_at: "2024-06-13T13:41:54.080-04:00",
            videos: [
              {
                url: "https://nickcoingophase1v2-158847-ruby.b158847.dev.eastus.az.svc.builder.cafe/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ1lIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8a29c2684c24bf925000fb30e11efe9d2cf8d8ca/SampleVideo_1280x720_1mb%20(1).mp4",
              },
            ],
            is_faviroute: false,
          },
        },
      },
    },
  },
];

const newArr = arr.sort((a, b) => {
  const first = `${
    a.attributes.featureable.data.attributes.name
      ? a.attributes.featureable.data.attributes.name
      : a.attributes.featureable.data.attributes.title
  }`;

  const second = `${
    b.attributes.featureable.data.attributes.name
      ? b.attributes.featureable.data.attributes.name
      : b.attributes.featureable.data.attributes.title
  }`;

  return first.localeCompare(second);
});

console.log(newArr);
