/**
 * This file is just an example.
 * You can delete it!
 */

import { MCFunction, tellraw } from 'sandstone'

MCFunction('welcome_message', () => {
  tellraw('@a', [
    '\n========= Congratulations! =========\n\n',
    { text: ' trains', color: 'gold', bold: true }, ' is ', { text: 'successfully installed.\n\n', color: 'green' },
    ' Created by 0b10000\n',
    ' Inspired by flashteens\n',
    ' Compiled using ', {text: 'Sandstone', color: "gold", bold: true, clickEvent: {action: "open_url", value: "https://sandstone.dev"}} ,
    '\n\n',
    '=================================',
  ])
}, {
  runOnLoad: true,
})