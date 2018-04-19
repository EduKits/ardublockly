/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview XML toolbox embedded into a JavaScript text string.
 */
'use strict';

/** Create a namespace for the application. */
var Ardublockly = Ardublockly || {};

Ardublockly.TOOLBOX_XML =
'<xml>' +
'  <sep></sep>' +
'  <category name="Light &amp; Sound">' +
'    <block type="io_writeRGBLED">' +
'      <value name="STATE">' +
'        <block type="io_onoff"></block>' +
'      </value>' +
'    </block>' +
'    <block type="io_setRGBLED"></block>' +
'    <block type="io_buzzerwrite">' +
'      <value name="STATE">' +
'        <block type="io_onoff"></block>' +
'      </value>' +
'    </block>' +
'    <block type="io_digitalwrite">' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
'  </category>' +
'  <category name="Sensors">' +
'    <block type="serial_setup"></block>' +
'  </category>' +
'  <category name="Controls">' +
'    <block type="controls_if"></block>' +
'    <block type="controls_repeat_ext">' +
'      <value name="TIMES">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_delay">' +
'      <value name="DELAY_TIME_MILI">' +
'        <block type="math_number">' +
'          <field name="NUM">1000</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="infinite_loop"></block>' +
'    <block type="logic_compare"></block>' +
'    <block type="logic_operation"></block>' +
'  </category>' +
'  <category name="Text &amp; Number">' +
'    <block type="math_number"></block>' +
'    <block type="math_arithmetic"></block>' +
'    <block type="math_number_property"></block>' +
'    <block type="math_random_int">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'  </category>' +
'  <category name="Advanced">' +
'    <block type="serial_setup"></block>' +
'  </category>' +
'  <category name="Functions">' +
'    <block type="serial_setup"></block>' +
'  </category>' +
'</xml>';
