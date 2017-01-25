"use strict";

const mongoose = require('mongoose');
const noteDAO = require(process.cwd() + '/server/api/note/dao/note-dao');
const expect = require('chai').expect;
const setupMongoose = require('../../_helpers/db').setupMongoose;

describe('noteDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    noteDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
