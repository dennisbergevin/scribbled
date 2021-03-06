export const fetchBooks = () => {
  return $.ajax({
    method: "GET",
    url: "api/books"
  })
}

export const fetchBook = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/books/${id}`
  })
}

export const createReview = (review) => {
    return $.ajax({
      method: "POST",
      url: `api/reviews`,
      data: { review }
    });
}

export const deleteReview = (reviewId) => {
    return $.ajax({
      method: "DELETE",
      url: `api/reviews/${reviewId}`
    });
}

