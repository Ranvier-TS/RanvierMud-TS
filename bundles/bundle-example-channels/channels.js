'use strict';

const {
  AreaAudience,
  PartyAudience,
  PrivateAudience,
  RoomAudience,
  WorldAudience,
  Channel
} = require('ranvier');

module.exports = [
  new Channel({
    name: 'chat',
    aliases: ['.'],
    color: ['bold', 'green'],
    description: 'Chat with everyone on the game',
    audience: new WorldAudience()
  }),

  new Channel({
    name: 'say',
    color: ['yellow'],
    description: 'Send a message to all players in your room',
    audience: new RoomAudience(),
    formatter: {
      sender: function (sender, target, message, colorify) {
        return colorify(`You say: '${message}'`);
      },

      target: function (sender, target, message, colorify) {
        return colorify(`${sender.name} says: '${message}'`);
      }
    }
  }),

  new Channel({
    name: 'tell',
    color: ['bold', 'cyan'],
    description: 'Send a private message to another player',
    audience: new PrivateAudience(),
    formatter: {
      sender: function (sender, target, message, colorify) {
        return colorify(`You tell ${target.name}, '${message}'`);
      },

      target: function (sender, target, message, colorify) {
        return colorify(`${sender.name} tells you, '${message}'`);
      }
    }
  }),

  new Channel({
    name: 'yell',
    color: ['bold', 'red'],
    description: 'Send a message to everyone in your area',
    audience: new AreaAudience(),
    formatter: {
      sender: function (sender, target, message, colorify) {
        return colorify(`You yell, '${message}'`);
      },

      target: function (sender, target, message, colorify) {
        return colorify(`Someone yells from nearby, '${message}'`);
      }
    }
  }),

  new Channel({
    name: 'gtell',
    color: ['bold', 'green'],
    description: 'Send a message to everyone in your group, anywhere in the game',
    audience: new PartyAudience(),
    formatter: {
      sender: function (sender, target, message, colorify) {
        return colorify(`You tell the group, '${message}'`);
      },

      target: function (sender, target, message, colorify) {
        return colorify(`${sender.name} tells the group, '${message}'`);
      }
    }
  }),
];
