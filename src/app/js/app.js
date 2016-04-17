(function() {
  'use strict';

  var app = angular.module('readingList', [])
    .controller('ReadingListController', function() {
      this.books = books;

      this.genres = genres;
    })
    .directive('bookCover', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/partials/book-cover.html'
      }
    })
    .directive('bookGenres', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/partials/book-genres.html'
      }
    })
  ;

  var genres = ['non-fiction', 'fantasy', 'fiction'];

  var books = [
    {
      title: 'A Game of Thrones: A Song of Ice and Fire',
      author: 'George R.R. Martin',
      isbn: '0553593714',
      review: 'This book was SO cool!',
      rating: 4,
      genres: ['non-fiction']
    },{
      title: 'HTML for Babies',
      author: 'John C Vanden-Heuvel Sr',
      isbn: '0615487661',
      review: "Love this book.",
      rating: 5,
      genres: ['non-fiction']
    },{
      title: 'A is for Array',
      author: 'Brandon J Hansen',
      isbn: '1489522212',
      review: 'Extremely satisfied!',
      rating: 4,
      genres: ['non-fiction']
    },{
      title: 'The Dragon Reborn',
      author: 'Robert Jordan',
      isbn: '0812513711',
      review: 'Worst book ever.',
      rating: 4,
      genres: ['non-fiction', 'fantasy']
    }
  ];
})();
