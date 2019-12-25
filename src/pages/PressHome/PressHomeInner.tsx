import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  // IonItem,
  // IonLabel,
  IonRow,
  IonSlide,
  IonSlides,
  // IonThumbnail,
  IonTitle,
  IonToolbar,
  isPlatform,
} from '@ionic/react';
import _ from 'lodash';
import React from 'react';
import { useResource } from 'rest-hooks';
import FileResource from '../../resources/file';
import GalleryPhotosResource from '../../resources/galleryPhoto';
import PostResource from '../../resources/post';
import UserResource from '../../resources/user';
import './press.css';

const styles = {
  iOSTitle: {
    paddingTop: '25px',
    width: 'auto',
    marginLeft: '-74px',
    textAlign: 'left',
    bottom: '25px',
    position: 'relative',
    fontSize: 24,
  },
  androidTitle: {
    paddingTop: '25px',
    width: 'auto',
    textAlign: 'left',
    fontSize: 24,
  },
  iOSCardbox: {
    width: '100% !important',
    height: '100% !important',
    bottom: '10px',
  },
  androidCardbox: {
    width: '100% !important',
    height: '100% !important',
  },
  iOSCardImg: {
    display: 'block',
    objectFit: 'cover',
    width: '100vw !important',
    height: '100% !important',
    // maxWidth: '100%',
    // maxHeight: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignSelf: 'center',
    padding: '5px',
  },
  androidCardImg: {
    width: '106.5px !important',
    height: '80.5px !important',
    maxWidth: '50%',

    maxHeight: '50%',
    alignSelf: 'center',
  },
  iOSButton: {
    width: 'auto',
    height: '45px',
    position: 'absolute',
    zIndex: '99',
    bottom: '-10px',
    right: '22px',
    paddingTop: '10px',
    paddingBottom: '5px',
  },
  androidButton: {
    width: 'auto',
    height: '45px',
    position: 'absolute',
    zIndex: '99',
    bottom: '-20px',
    right: '20px',
    paddingTop: '10px',
    paddingBottom: '5px',
  },
  image: {
    width: '100vw',
    height: '60vh',
    objectFit: 'cover',
    position: 'relative',
    paddingBottom: '30px',
  },
};

const PressHomeInner: React.FC = () => {
  // type Item = {
  //     src: string;
  //     text: string;
  //   };
  // const items: Item[] = [{ src: 'http://placekitten.com/g/200/300', text: 'a picture of a cat' }];

  const [posts, galleryPhotos] = useResource(
    [PostResource.listShape(), {}],
    [GalleryPhotosResource.listShape(), { sort: '-modified_on' }]
  );

  const fileIds = _.concat(
    posts.map((post) => post.header_image).filter((x) => !_.isNull(x)),
    galleryPhotos.map((x) => x.photo).filter((x) => !_.isNull(x))
  ).filter((x) => x);

  const [authors, files] = useResource(
    [
      UserResource.listShape(),
      {
        'filter[id][in]': posts
          .map((post) => post.created_by)
          .filter(_.negate(_.isNull))
          .join(','),
      },
    ],
    [FileResource.listShape(), { 'filter[id][in]': fileIds }]
  );
  const authorById = _.keyBy(authors, 'id');
  const filesById = _.keyBy(files, 'id');

  const slideOptsNews = {
    initialSlide: 1,
    slidesPerView: 2,
    freeMode: false,
    speed: 400,
  };

  const slideOptsGallery = {
    initialSlide: 1,
    slidesPerView: 1,
    freeMode: false,
    speed: 400,
    spaceBetween: 10,
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Press</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Press</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonImg src={`/assets/press.png`} />
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonTitle
                style={
                  isPlatform('ios') ? styles.iOSTitle : styles.androidTitle
                }
              >
                News
              </IonTitle>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonSlides pager={false} options={slideOptsNews}>
                {posts.map((post) => (
                  <IonSlide
                    key={post.pk()}
                    style={
                      isPlatform('ios')
                        ? styles.iOSCardbox
                        : styles.androidCardbox
                    }
                  >
                    <IonCard routerLink={`/posts/${post.id}`}>
                      <IonCardContent className="line-clamp">
                        {post.header_image && filesById[post.header_image] && (
                          <IonImg
                            style={
                              isPlatform('ios')
                                ? styles.iOSCardImg
                                : styles.androidCardImg
                            }
                            alt=""
                            src={
                              filesById[post.header_image].data.thumbnails[6]
                                .url
                            }
                          />
                        )}
                        <IonCardHeader>
                          <IonTitle>{post.title}</IonTitle>
                        </IonCardHeader>
                        {post.created_by && authorById[post.created_by] && (
                          <IonCardSubtitle>
                            {authorById[post.created_by].first_name}{' '}
                            {authorById[post.created_by].last_name}
                          </IonCardSubtitle>
                        )}
                      </IonCardContent>
                    </IonCard>
                  </IonSlide>
                ))}
              </IonSlides>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                routerLink={`/posts`}
                fill={'outline'}
                style={
                  isPlatform('ios') ? styles.iOSButton : styles.androidButton
                }
              >
                Read More
              </IonButton>
            </IonCol>
          </IonRow>
          {/* <IonRow>
            <IonCol>
              <IonTitle
                style={
                  isPlatform('ios') ? styles.iOSTitle : styles.androidTitle
                }
              >
                Decision 2020
              </IonTitle>
            </IonCol>
          </IonRow> */}
          {/* <IonRow>
            <IonCol>
              <IonItem style={{ paddingBottom: '20px' }} lines="none">
                <IonThumbnail slot="start">
                  <IonImg alt="" src="/assets/munsecgen.png" />
                </IonThumbnail>
                <IonLabel className="textboxwrapper">
                  Read about the candidates who are campaigning to be 2021
                  secretary general
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonRow> */}
          {/* <IonRow>
            <IonCol>
              <IonButton
                routerLink={`/decision`}
                fill={'outline'}
                style={
                  isPlatform('ios') ? styles.iOSButton : styles.androidButton
                }
              >
                Read More
              </IonButton>
            </IonCol>
          </IonRow> */}
          <IonRow>
            <IonCol>
              <IonTitle
                style={
                  isPlatform('ios') ? styles.iOSTitle : styles.androidTitle
                }
              >
                MUN {'&'} U
              </IonTitle>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonSlides pager={true} options={slideOptsGallery}>
                {galleryPhotos.map((galleryPhoto) => {
                  const photo =
                    galleryPhoto.photo && filesById[galleryPhoto.photo];
                  if (!photo) return null;

                  return (
                    <IonSlide key={galleryPhoto.id}>
                      <IonGrid>
                        <IonRow>
                          <IonImg style={styles.image} src={photo.data.url} />
                        </IonRow>
                      </IonGrid>
                    </IonSlide>
                  );
                })}
              </IonSlides>
            </IonCol>
          </IonRow>
          {/* <IonRow>
            <IonCol>
              <IonButton
                routerLink={`/gallery`}
                fill={'outline'}
                style={
                  isPlatform('ios') ? styles.iOSButton : styles.androidButton
                }
              >
                See More
              </IonButton>
            </IonCol>
          </IonRow> */}
        </IonGrid>
      </IonContent>
    </>
  );
};

export default PressHomeInner;
