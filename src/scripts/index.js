'use strict';
import 'babel-polyfill';
import '../styles/index.scss';
import search from './components/Search';
import listRepos from './components/ListRepos';
import listStarred from './components/ListStarred';

search();
listRepos();
listStarred();
