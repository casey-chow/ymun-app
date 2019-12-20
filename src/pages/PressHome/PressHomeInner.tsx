import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonRow,
  IonSlide,
  IonSlides,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { useResource } from 'rest-hooks';
import GalleryResource from '../../resources/gallery';
import PostResource from '../../resources/post';
import './press.css';

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
    freeMode: true,
    speed: 400,
  };

  const slideOptsGallery = {
    initialSlide: 1,
    slidesPerView: 1,
    freeMode: false,
    speed: 400,
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
        <IonImg className="image" src={`/assets/press.png`} />
        <h1>News</h1>
        <IonSlides pager={false} options={slideOptsNews}>
          {posts.map((post) => (
            <IonSlide key={post.pk()}>
              <IonCard className="cardbox" routerLink={`/posts/${post.id}`}>
                <IonCardContent>
                  <IonGrid>
                    <IonRow>
                      <img
                        className="image"
                        alt=""
                        src={post.header_image.data.thumbnails[6].url}
                      />
                    </IonRow>
                    <IonRow>
                      <h3 className="textbox">
                        <b>{post.title}</b>
                      </h3>
                    </IonRow>
                    <IonRow>
                      <IonCardSubtitle>
                        {post.created_by.first_name} {post.created_by.last_name}
                      </IonCardSubtitle>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            </IonSlide>
          ))}
        </IonSlides>
        <IonButton className="buttonRight" routerLink={`/posts`}>
          Read More
        </IonButton>
        <h1>Decision 2020</h1>
        <IonItem>
          <IonThumbnail slot="start">
            <img alt="" src="/assets/munsecgen.png" />
          </IonThumbnail>
          <IonLabel className="textboxwrapper">
            Read about the candidates who are campaigning to be 2021 secretary
            general
          </IonLabel>
        </IonItem>
        <IonButton className="buttonRight" routerLink={`/decision`}>
          Read More
        </IonButton>
        <h1>MUN {'&'} U</h1>
        <IonSlides pager={true} options={slideOptsGallery}>
          {gallery.map((pic) => (
            <IonSlide key={pic.pk()}>
              <IonGrid>
                <IonRow>
                  <img alt="" className="image" src={pic.photo.data.url} />
                </IonRow>
                <IonRow>
                  <IonLabel>{pic.caption}</IonLabel>
                </IonRow>
              </IonGrid>
            </IonSlide>
          ))}
        </IonSlides>
        <IonButton className="buttonRight" routerLink={`/gallery`}>
          See More
        </IonButton>
      </IonContent>
    </>
  );
};

export default PressHomeInner;
