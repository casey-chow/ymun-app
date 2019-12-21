import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
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
  IonCol,
  IonCardHeader,
} from '@ionic/react';
import React from 'react';
import { useResource } from 'rest-hooks';
import GalleryResource from '../../resources/gallery';
import PostResource from '../../resources/post';
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

  const posts = useResource(PostResource.listShape(), {});

  const gallery = useResource(GalleryResource.listShape(), {});

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
                        <IonImg
                          style={
                            isPlatform('ios')
                              ? styles.iOSCardImg
                              : styles.androidCardImg
                          }
                          alt=""
                          src={post.header_image.data.thumbnails[6].url}
                        />
                        <IonCardHeader>
                          <IonTitle>{post.title}</IonTitle>
                        </IonCardHeader>
                        <IonCardSubtitle>
                          {post.created_by.first_name}{' '}
                          {post.created_by.last_name}
                        </IonCardSubtitle>
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
                {gallery.map((pic) => (
                  <IonSlide key={pic.pk()}>
                    <IonGrid>
                      <IonRow>
                        <IonImg style={styles.image} src={pic.photo.data.url} />
                      </IonRow>
                    </IonGrid>
                  </IonSlide>
                ))}
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
