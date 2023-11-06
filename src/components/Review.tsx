import { ReviewType } from "../types/review";

type ReviewProps = {
  review: ReviewType;
}

function Review({review}: ReviewProps): JSX.Element {

  return (
    <li className="reviews__item" key={review.user.id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.date.split('T')[0]}>{review.date}</time>
      </div>
    </li>
  )

}

export default Review;
