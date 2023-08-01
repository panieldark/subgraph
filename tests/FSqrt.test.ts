import { BigInt } from "@graphprotocol/graph-ts";
import { describe, test, assert } from "matchstick-as/assembly/index"
import { FSqrt } from "../src/BN254ScalarField";

const TEST_VECTORS_INPUTS = [
  BigInt.fromString('1814110601147239024298789635012697494996190218568527774863020202418677723317'),
  BigInt.fromString('9727956158421275631217716316458725660268946301978900893169653393225116891807'),
  BigInt.fromString('7355650106602990158973169992021980542257271901071737475857966730409496835690'),
  BigInt.fromString('7001201906750509448239824766578280946475997609180973849547288051958993083480'),
  BigInt.fromString('7378224102370453732157489999633574617251071169943713264176211815603916764012'),
  BigInt.fromString('1027072304383238593458247115162266918401336772910756875925013197462729507779'),
  BigInt.fromString('2372427915949278574728453511993505575374340829031222391461691138781718376877'),
  BigInt.fromString('5242360769188066785167619578772406535574163953380883284593493180020194232653'),
  BigInt.fromString('908623324042001847694059212985744133391440446510360308273060898721125838394'),
  BigInt.fromString('5499028812787567693336721147732442613813672456655833412374771219176632747020'),
  BigInt.fromString('6543023188617857539890813015476851342263083306999201336023351609726668363317'),
  BigInt.fromString('65702288254931094554835668292468590361076354964354032880724098364747780462'),
  BigInt.fromString('11918177026570922879797528660485246146611920192278222479893011430588309468141'),
  BigInt.fromString('367826399254925823160057182804184583960401153911793272502268752063927830964'),
  BigInt.fromString('3208585760759532476381258366402118140753983968463722667229630591123535605269')
]

const TEST_VECTORS_OUTPUTS = [
  BigInt.fromString('5941216035329765654481525417812620919103381720442841798155363147639699144209'),
  BigInt.fromString('19100715756189968987459209623477015572608659496054329956031506660898752953628'),
  BigInt.fromString('21010201451176277427272951593304408679508841752037475451389464329571628950087'),
  BigInt.fromString('6871591617031762889708620067914840464416953866349215454715483597256795257444'),
  BigInt.fromString('15333395061964514726088406982096896056000494238928012694480726625624665029030'),
  BigInt.fromString('1015060132613538805507807150126034803431212441842393804094821549670967228427'),
  BigInt.fromString('15313262063186008468696968473245272236936316387083903497545959087656815732275'),
  BigInt.fromString('7803064942216321009425417801875212163182205585639888129001802955526862175466'),
  BigInt.fromString('19377320696706458224934522621805790775344455958243717571068270920109790613392'),
  BigInt.fromString('5033288834804127924638097159907192900205484511882850586139236940768707211406'),
  BigInt.fromString('8622710182028425515572357227104117432160058437931819235111530126837818386087'),
  BigInt.fromString('18394007689078211692106794592570741155829139007214551672371342423143271804902'),
  BigInt.fromString('547371245578079470645316743144708115416002727159732680116725150954800200743'),
  BigInt.fromString('17198904852307344453069778912409389345864280577677817070705030088921438528801'),
  BigInt.fromString('1188929699227197511804623950966601114839590789923240683006597559724642856904')
]

describe("sqrt", () => {
  test("matches crypto-utils test cases", () => {
    for (let i = 0; i < TEST_VECTORS_INPUTS.length; i++) {
      const input = TEST_VECTORS_INPUTS[i];
      const expected = TEST_VECTORS_OUTPUTS[i];
      const actual = FSqrt(input);
      // assert.assertNonNull doesn't seem to compile for some reason
      if (actual === null) throw new Error("result should not be null!");

      assert.bigIntEquals(expected, actual);
    }
  });
});
