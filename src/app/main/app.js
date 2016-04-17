(function() {
  'use strict';

  var app = angular.module('readingList', [])
    .controller('ReadingListController', function() {
      this.books = books;
    })
  ;
  var books = [
    {
      title: 'A Game of Thrones: A Song of Ice and Fire',
      author: 'George R.R. Martin',
      isbn: '0553593714',
      review: 'no review',
      rating: 4,
      genres: ['non-fiction']
    },{
      title: 'HTML for Babies',
      author: 'John C Vanden-Heuvel Sr',
      isbn: '0615487661',
      review: "no review",
      rating: 5,
      genres: ['non-fiction']
    },{
      title: 'A is for Array',
      author: 'Brandon J Hansen',
      isbn: '1489522212',
      review: 'no review',
      rating: 4,
      genres: ['non-fiction']
    },{
      title: 'The Dragon Reborn',
      author: 'Robert Jordan',
      isbn: '0812513711',
      review: 'no review',
      rating: 4,
      genres: ['non-fiction']
    }
  ];
})();
