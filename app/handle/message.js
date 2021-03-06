const fs = require("fs");
const createCard = require("../controllers/rank_card");
var osu = require("node-osu");
var javcode = Array(
  "MIAD-530",
  "MIDD-944",
  "LADY-077",
  "SW-186",
  "STAR444",
  "T28-184",
  "dvdes-635",
  "BOD-277",
  "BOD-277",
  "ARMG-014",
  "JUC-579",
  "BBI-142",
  "MILD-716",
  "FSLV-002",
  "CRS-S014",
  "ODFW-006",
  "SOE-837",
  "SOE-837",
  "Nhdta-141",
  "NADE-783",
  "PPPD-294",
  "MIRD-102",
  "SRS-022",
  "BBI-163",
  "BIST-001",
  "SIRO-1690",
  "HAWA-020",
  "SNIS-166",
  "MIRD136",
  "ABP-138",
  "WANZ-201",
  "STAR-524",
  "SAMA-385",
  "ABP-171",
  "IPZ-409",
  "ABP-108",
  "MIDE128",
  "N0960",
  "JUX-357",
  "SNIS-070",
  "SIRO-1774",
  "MIRD-134",
  "MIDE-128",
  "ABP-145",
  "N0962",
  "ABP159",
  "ZIZG-003",
  "CWP-107",
  "IPZ-127",
  "MIDD-532",
  "IPTD-748",
  "IESP-144",
  "crpd-222",
  "GAR-280",
  "BW248",
  "MXGS173",
  "MIAD-530",
  "RCT-402",
  "ABP-159",
  "ABP-103",
  "ABP-105",
  "ABP-108",
  "ABP-117",
  "ABP-128",
  "ABP-013",
  "ABP-138",
  "ABP-142",
  "ABP-171",
  "ABP-276",
  "ABP-092",
  "ABS-130",
  "ABS-141",
  "ABS-170",
  "ABS-217",
  "ABS-047",
  "ABS-070",
  "ABS-074",
  "ABS-083",
  "ADN-032",
  "AKB-056",
  "AMBI-048",
  "AOZ-173z",
  "AOZ-189z",
  "AOZ-212z",
  "AOZ-217z",
  "AP-154",
  " AP-081",
  "APAA-151",
  "APAA-246",
  "APAA-258",
  "APAA-272",
  "APAA-280",
  "APAA-299",
  "APAK-074",
  "APAK-078",
  "APAK-086",
  "APAK-088",
  "ARM-383",
  "ARM-416",
  "ARMF-003",
  "ATID-157",
  "ATID-207",
  "ATOM-093",
  "AUKG-276",
  "AUKG-293",
  "AUKG-045",
  "AVOP-109",
  "AVOP-155",
  "AVOP-159",
  "AVOP-167",
  "AVOP-002",
  "BAMS-001",
  "BDSR-185",
  "BDSR-202",
  "BGN-018",
  "BGN-005",
  "BKSP-274",
  "BRA-007",
  "BUG-012",
  "CCCV-001",
  "CHN-035",
  "CLUB-196",
  "CMV-049",
  "CND-128",
  "CND-129",
  "CND-142",
  "CND-089",
  "CRIM-035",
  "CRS-046",
  "CUT-002",
  "CWM-221",
  "DAJ-075",
  "DANDY-289",
  "DANDY-368",
  "DANDY-440",
  "DASD-267",
  "DDT-469",
  "DDT-482",
  "DFE-020",
  "DISM-001",
  "DIY-030",
  "DMOW-098",
  "DOM-021",
  "DOM-043",
  "DOPP-035",
  "DPHN-142",
  "DV-1175",
  "DV-1246",
  "DVDES-659",
  "DVDES-734",
  "DVDES-804",
  "DVDES-818",
  "DVDES-832",
  "DVDES-836",
  "DVDES-878",
  "DVLL-010",
  "DWI-01",
  "EBOD-249",
  "EBOD-338",
  "EBOD-405",
  "EBOD-416",
  "EDD-191",
  "EMRD-058",
  "EQ-059",
  "EXD-048",
  "FAJS-035",
  "FAX-306",
  "FAX-428",
  "FSET-249",
  "FSET-264",
  "FSET-294",
  "FSET-320",
  "FSET-321",
  "FSET-323",
  "FSET-324",
  "FSET-421",
  "FSET-553",
  "GASO-0012",
  "GASO-0013",
  "GDTM-044",
  "GDTM-054",
  "GDTM-078",
  "GENT-060",
  "GENT-075",
  "GEXP-91",
  "GEXP-93",
  "GG-106",
  "GG-132",
  "GG-177",
  "GG-228",
  "GIRO-92",
  "GKI-012",
  "GSHRB-037",
  "GSHRB-046",
  "GVG-106",
  "GVG-135",
  "GVG-158",
  "GVG-067",
  "GVRD-05",
  "HAVD-596",
  "HAVD-830",
  "HAVD-837",
  "HBAD-141",
  "HBAD-260",
  "HBAD-267",
  "HDI-001",
  "HED-002",
  "HELL-102",
  "HERR-024",
  "HERR-029",
  "HERX-025",
  "HERX-029",
  "HND-110",
  "HND-132",
  "HND-138",
  "HND-186",
  "HNDS-024",
  "HNDS-024",
  "HODV-20467",
  "HODV-20978",
  "HODV-20986",
  "HODV-20993",
  "HODV-21002",
  "HODV-21027",
  "HODV-21062",
  "HRRB-003",
  "HUNT-852",
  "HUNT-913",
  "HUNT-946",
  "HUNT-971",
  "HUNT-999",
  "HUNTA-018",
  "HUNTA-025",
  "HUNTA-032",
  "HUNTA-006",
  "IBW-312",
  "IBW-356",
  "IBW-363",
  "IBW-372",
  "IBW-475z",
  "IBW-476z",
  "IBW-483z",
  "IBW-495z",
  "IBW-506z",
  "IBW-508z",
  "IBW-518z",
  "IDOL-018",
  "IEND-002",
  "IENE-101",
  "IENE-112",
  "IENE-114",
  "IENE-159",
  "IENE-160",
  "IENE-386",
  "IENE-406",
  "IENE-412",
  "IENE-431",
  "IESP-104",
  "IESP-114",
  "IESP-418",
  "IESP-458",
  "INU-027",
  "IPTD-587",
  "IPTD-619",
  "IPTD-694",
  "IPTD-813",
  "IPTD-949",
  "IPZ-140",
  "IPZ-187",
  "IPZ-204",
  "IPZ-210",
  "IPZ-226",
  "IPZ-228",
  "IPZ-235",
  "IPZ-257",
  "IPZ-281",
  "IPZ-306",
  "IPZ-331",
  "IPZ-344",
  "IPZ-368",
  "IPZ-040",
  "IPZ-478",
  "JOHS-005",
  "JUC-112",
  "JUC-368",
  "JUC-398",
  "JUC-419",
  "JUC-944",
  "JUMP-2210",
  "JUMP-2312",
  "JUX-298",
  "JUX-360",
  "JUX-500",
  "KAWD-596",
  "KAWD-608",
  "KAWD-629",
  "KAWD-640",
  "KAWD-651",
  "KISD-082",
  "KK-054",
  "KRND-020",
  "KRND-027",
  "KRND-029",
  "KRND-031",
  "KTDS-726",
  "KTDS-769",
  "KTDS-774",
  "LLR-005",
  "LLR-008",
  "LOL-089",
  "LOL-091",
  "LOVE-90",
  "MAS-052",
  "MDTM-001",
  "MDTM-013",
  "MDTM-027",
  "MDTM-029",
  "MDYD-732",
  "MDYD-785",
  "MDYD-811",
  "MDYD-881",
  "MIAD-488",
  "MIAD-573",
  "MIAD-730",
  "MIAD-767",
  "MIDD-678",
  "MIDE-113",
  "MIDE-123",
  "MIDE-243",
  "MIDE-007",
  "MIGD-590",
  "MIGD-594",
  "MIGD-613",
  "MIGD-625",
  "MIGD-639",
  "MIGD-654",
  "MILD-863",
  "MIMK-023",
  "MIRD-139",
  "MIST-045",
  "MMND-104",
  "MNG-93",
  "MOC-004",
  "MOMJ-017",
  "MSK-006",
  "MSTT-002",
  "MUKD-192",
  "MUKD-335",
  "MUM-001",
  "MUM-105",
  "MUM-109",
  "MUM-110",
  "MUM-113",
  "MUM-114",
  "MUM-119",
  "MUM-126",
  "MUM-130",
  "MUM-132",
  "MUM-135",
  "MUM-143",
  "MUM-144",
  "MUM-165",
  "MUM-168",
  "MUM-169",
  "MUM-172",
  "MUM-173",
  "MUM-174",
  "MUM-019",
  "MUM-067",
  "MUM-007",
  "MUM-079",
  "MUM-097",
  "MVSD-198",
  "MXGS-236",
  "MXGS-271",
  "MXGS-553",
  "MXGS-729",
  "MXSPS-178",
  "NHDT-996",
  "NHDTA-141",
  "NHDTA-153",
  "NHDTA-223",
  "NHDTA-276",
  "NHDTA-295",
  "NHDTA-314",
  "NHDTA-346",
  "NHDTA-348",
  "NHDTA-399",
  "NHDTA-557",
  "NHDTA-564",
  "NHDTA-583",
  "NHDTA-588",
  "NHDTA-591",
  "NHDTA-599",
  "NHDTA-600",
  "NHDTA-605",
  "NHDTA-606",
  "NHDTA-610",
  "NHDTA-636",
  "NHDTA-639",
  "NHDTA-644",
  "NHDTA-657",
  "NIN-004",
  "NITR-139",
  "NOP-019",
  "NTR-003",
  "ODFB-037",
  "ODFP-010",
  "OGPP-006",
  "OKSN-103",
  "OKSN-127",
  "OKSN-228",
  "OKSN-242",
  "ONED-557",
  "ONED-989",
  "ONEG-029",
  "ONEZ-027",
  "ONEZ-035",
  "ONI-013",
  "OVG-025",
  "OYC-004",
  "OYC-005",
  "PARM-062",
  "PARM-065",
  "PARM-070",
  "PARM-077",
  "PGD-587",
  "PGD-788",
  "PMP-189",
  "PMP-193",
  "PMS-198",
  "PMS-201",
  "PPPD-320",
  "PPPD-337",
  "QBD-065",
  "QQ-041",
  "R18-294",
  "RAW-006",
  "RBD-173",
  "RBD-249",
  "RBD-281",
  "RBD-291",
  "RBD-306",
  "RBD-328",
  "RBD-346",
  "RBD-360",
  "RBD-368",
  "RBD-395",
  "RBD-397",
  "RBD-418",
  "RBD-441",
  "RBD-481",
  "RBD-487",
  "RBD-493",
  "RBD-503",
  "RBD-505",
  "RBD-541",
  "RBD-551",
  "RBD-626",
  "RBD-628",
  "RBD-694",
  "RCT-222",
  "RCT-352",
  "RCT-600",
  "RCT-666",
  "RCT-752",
  "RDD-122",
  "RHTS-015",
  "RHTS-032",
  "RHTS-040",
  "RTP-020",
  "RTP-035",
  "RTP-039",
  "RTP-049",
  "RTP-057",
  "RTP-009",
  "SAK-8453",
  "SAMA-842",
  "SAMA-853",
  "SBNS-078",
  "SCOP-118",
  "SCOP-185",
  "SCOP-266",
  "SCR-111",
  "SCR-021",
  "SCR-022",
  "SCR-023",
  "SCR-040",
  "SCR-043",
  "SCR-050",
  "SCR-056",
  "SCR-057",
  "SCR-067",
  "SCR-069",
  "SCR-077",
  "SCR-082",
  "SCR-089",
  "SCR-092",
  "SCR-099",
  "SDDE-346",
  "SDDE-372",
  "SDDE-391",
  "SDMS-297",
  "SDMT-506",
  "SDMU-100",
  "SDMU-120",
  "SDMU-140",
  "SDMU-161",
  "SDMU-165",
  "SDMU-194",
  "SDMU-196",
  "SERO-0262",
  "SERO-0269",
  "SGA-019",
  "SHE-125",
  "SHE-147",
  "SHKD-315",
  "SHKD-345",
  "SHKD-378",
  "SHKD-403",
  "SHKD-409",
  "SHKD-489",
  "SHKD-518",
  "SHKD-546",
  "SHKD-586",
  "SHKD-614",
  "SHKD-619",
  "SHL-035",
  "SILK-001",
  "SILK-052",
  "SILK-009",
  "SIS-012",
  "SIS-020",
  "SIS-021",
  "SIS-022",
  "SIS-023",
  "SIS-028",
  "SIS-032",
  "SIS-007",
  "SMA-661",
  "SMA-723",
  "SMS-004",
  "SND-003",
  "SNIS-110",
  "SNIS-268",
  "SNIS-313",
  "SNIS-070",
  "SNIS-070",
  "SOE-146",
  "SOE-028",
  "SOE-339",
  "SOE-586",
  "SOE-910",
  "SOE-936",
  "SOE-940",
  "SOE-941",
  "SOE-990",
  "SOE-992",
  "SOE-992",
  "SON-501",
  "SOR-018",
  "SQTE-082",
  "SQTE-090",
  "SQTE-092",
  "SRS-015",
  "SS-025",
  "SS-005",
  "SSD-111",
  "SSD-086",
  "STAR-3115",
  "STAR-316",
  "STAR-325",
  "STAR-395",
  "STAR-476",
  "STAR-545",
  "STAR-551",
  "STAR-553"
);
module.exports = function({
  api,
  modules,
  config,
  __GLOBAL,
  User,
  Thread,
  Rank
}) {
  let { prefix, ENDPOINT, admins } = config;
  return function({ event }) {
    let { body: contentMessage, senderID, threadID } = event;
    senderID = parseInt(senderID);
    threadID = parseInt(threadID);
    var osuApi = new osu.Api("f542df9a0b7efc666ac0350446f954740a88faa8", {
      notFoundAsError: true,
      completeScores: false
    });
    function osuinfo(username) {
      var main = osuApi
        .apiCall("/get_user", {
          u: username
        })
        .then(user => {
          var username = user[0].username;
          var playcount = user[0].playcount;
          var ppraw = user[0].pp_raw;
          var level = user[0].level;
          var countryrank = user[0].pp_country_rank;
          var accuracy = user[0].accuracy;
          api.sendMessage(
            `*OSU INFO*\n*username* : ` +
              username +
              `\n*level* :` +
              level +
              `\n*playcount* :` +
              playcount +
              `\n*CountryRank* : ` +
              countryrank +
              `\n*Total PP* : ` +
              ppraw +
              `\n*Accuracy* :` +
              accuracy +
              `\n<3 `,
            threadID
          );
        });
      return api.sendMessage(main, threadID);
    }

    /* ================ BAN & UNBAN ==================== */

    if (__GLOBAL.userBlocked.includes(senderID)) {
      return;
    }
    // Unban thread
    if (__GLOBAL.threadBlocked.includes(threadID)) {
      if (
        contentMessage == `${prefix}unban thread` &&
        senderID == "100027477920916"
      ) {
        const indexOfThread = __GLOBAL.threadBlocked.indexOf(threadID);
        if (indexOfThread == -1)
          return api.sendMessage("Nh??m n??y ch??a b??? ch???n!", threadID);
        Thread.unban(threadID).then(success => {
          if (!success)
            return api.sendMessage("Kh??ng th??? b??? ch???n nh??m n??y!", threadID);
          api.sendMessage("Nh??m n??y ???? ???????c b??? ch???n!", threadID);
          //Clear from blocked
          __GLOBAL.threadBlocked.splice(indexOfThread, 1);
          modules.log(threadID, "Unban Thread");
        });

        return;
      }
      return;
    }

    Rank.updatePoint(senderID, 2);

    // Unban user
    if (
      contentMessage.indexOf(`${prefix}unban`) == 0 &&
      senderID == "100027477920916"
    ) {
      const mentions = Object.keys(event.mentions);
      if (mentions.length == 0)
        return api.sendMessage("Vui l??ng tag nh???ng ng?????i c???n unban", threadID);
      mentions.forEach(mention => {
        const indexOfUser = __GLOBAL.userBlocked.indexOf(parseInt(mention));
        if (indexOfUser == -1)
          return api.sendMessage(
            {
              body: `${event.mentions[mention]} ch??a b??? ban, vui l??ng ban tr?????c!`,
              mentions: [
                {
                  tag: event.mentions[mention],
                  id: mention
                }
              ]
            },
            threadID
          );

        User.unban(mention).then(success => {
          if (!success)
            return api.sendMessage("Kh??ng th??? unban ng?????i n??y!", threadID);
          api.sendMessage(
            {
              body: `???? unban ${event.mentions[mention]}!`,
              mentions: [
                {
                  tag: event.mentions[mention],
                  id: mention
                }
              ]
            },
            threadID
          );
          //Clear from blocked
          __GLOBAL.userBlocked.splice(indexOfUser, 1);
          modules.log(mentions, "Unban User");
        });
      });
      return;
    }

    // Ban thread
    if (
      contentMessage == `${prefix}ban thread` &&
      senderID == "100027477920916"
    ) {
      api.sendMessage("B???n c?? ch???c mu???n ban group n??y ?", threadID, function(
        error,
        info
      ) {
        if (error) return modules.log(error, 2);
        __GLOBAL.confirm.push({
          type: "ban:thread",
          messageID: info.messageID,
          target: parseInt(threadID),
          author: senderID
        });
      });
      return;
    }

    // Ban user
    if (
      contentMessage.indexOf(`${prefix}ban`) == 0 &&
      senderID == "100027477920916"
    ) {
      const mentions = Object.keys(event.mentions);
      if (mentions.length == 0)
        return api.sendMessage("Vui l??ng tag nh???ng ng?????i c???n ban!", threadID);
      mentions.forEach(mention => {
        if (admins.includes(mention))
          return api.sendMessage(
            "B???n kh??ng ????? th???m quy???n ????? ban ng?????i n??y?",
            threadID
          );
        api.sendMessage(
          {
            body: `B???n c?? ch???c mu???n ban ${event.mentions[mention]}?`,
            mentions: [
              {
                tag: event.mentions[mention],
                id: mention
              }
            ]
          },
          threadID,
          function(error, info) {
            if (error) return modules.log(error, 2);
            __GLOBAL.confirm.push({
              type: "ban:user",
              messageID: info.messageID,
              target: {
                tag: event.mentions[mention],
                id: parseInt(mention)
              },
              author: senderID
            });
          }
        );
      });
      return;
    }

    /* ==================== SMTHING ================ */
    //detect
    if (modules.checkCrap(contentMessage)) {
      api.sendMessage(`Onii-chan kh??ng ???????c n??i b???y nha >:(`, threadID);
      return;
    }

    if (contentMessage == `em ??i` || contentMessage == "@K???o S???a") {
      api.sendMessage(`D??? nii-chan g???i Sumi ????`, threadID);
      return;
    }

    //lenny
    if (contentMessage == `${prefix}lenny`) {
      api.sendMessage("( ???? ???? ????) ", threadID);
    }

    //hug
    if (contentMessage == `${prefix}hug`) {
      api.sendMessage(" (??? ???? ???? ????)???  ", threadID);
    }

    if (contentMessage == `${prefix}mlem`) {
      api.sendMessage(" ( ???????? ????)  ", threadID);
    }

    //prefix
    if (contentMessage == `prefix`) {
      api.sendMessage("Prefix is: !", threadID);
    }
    
    //kick user
    if (
      contentMessage.indexOf(`${prefix}kick`) == 0 &&
      senderID == "100027477920916"
    ) {
      for (var i = 0; i < Object.keys(event.mentions).length; i++) {
        api.removeUserFromGroup(Object.keys(event.mentions)[i], threadID);
        return;
      }
      return;
    }
    
    //t??m v??? tr?? theo ip
    if (contentMessage.indexOf(`${prefix}local `) == 0) {
      const apilocal = require("./findlocaltion");
      let callback = function() {
        delete require.cache[
          require.resolve(__dirname + "/src/findlocaltion.json")
        ];
        let iplocal = require(__dirname + "/src/findlocaltion.json");
        console.log(iplocal);
        if (iplocal.status == "success") {
          api.sendMessage(
            " To??n b??? th??ng tin v??? ip: " +
              iplocal.query +
              "\n - Th??nh ph???: " +
              iplocal.city +
              "\n - T??n mi???n: " +
              iplocal.regionName +
              "\n - Qu???c gia: " +
              iplocal.country +
              "\n - N??i gi???: " +
              iplocal.timezone +
              "\n - AS mumber v?? t??? ch???c: " +
              iplocal.as +
              "\n - T??n t??? ch???c: " +
              iplocal.org +
              "\n - T??n ISP: " +
              iplocal.isp +
              ".",
            threadID
          );
        } else {
          api.sendMessage(
            "ip b???n nh???p kh??ng t???n t???i ho???c h??? th???ng l???i, vui l??ng th??? l???i sau! L???i: " +
              iplocal.status +
              " | " +
              iplocal.message +
              ".",
            threadID
          );
        }
      };
      apilocal.api(
        contentMessage.slice(prefix.length + 6, contentMessage.length),
        callback
      );
      return;
    }

    //th???i ti???t
    if (contentMessage.indexOf(`${prefix}weather `) == 0) {
      const weather = require("./weather");
      let callback = function() {
        delete require.cache[require.resolve(__dirname + "/src/weather.json")];
        let weatherdata = require(__dirname + "/src/weather.json");
        if (weatherdata.cod == "200") {
          api.sendMessage(
            `Th??nh ph???: ` +
              weatherdata.name +
              `\n - nhi???t ????? hi???n t???i: ` +
              weatherdata.main.temp +
              `??C \n - B???u tr???i: ` +
              weatherdata.weather[0].description +
              `\n - ????? ???m trong kh??ng kh??: ` +
              weatherdata.main.humidity +
              `% \n - t???c ????? gi??: ` +
              weatherdata.wind.speed +
              `km/h \n Tips: Th???i ti???t lu??n c???p nh???t theo realtime, n??n c??c b???n ch?? ?? th???i ti???t ????? tr??nh c??c ho???t ?????ng vui ch??i b??? tr?? ho??n nha <3`,
            threadID
          );
        } else {
          api.sendMessage(
            `H??? th???ng ???? x???y ra l???i, vui l??ng b??o l???i cho admin!`,
            threadID
          );
        }
      };
      weather.api(
        contentMessage.slice(prefix.length + 8, contentMessage.length),
        callback
      );
      return;
    }

    //say
    if (contentMessage.indexOf(`${prefix}say `) == 0) {
      const tts = require("./say");
      let callback = function() {
        let m = {
          body: "",
          attachment: fs.createReadStream(__dirname + "/src/say.mp3")
        };
        api.sendMessage(m, threadID);
      };
      if (contentMessage.indexOf("jp") == 5)
        tts.other(
          contentMessage.slice(prefix.length + 7, contentMessage.length),
          "ja",
          callback
        );
      else if (contentMessage.indexOf("en") == 5)
        tts.other(
          contentMessage.slice(prefix.length + 7, contentMessage.length),
          "en-US",
          callback
        );
      else if (contentMessage.indexOf("ko") == 5)
        tts.other(
          contentMessage.slice(prefix.length + 7, contentMessage.lenght),
          "ko",
          callback
        );
      else if (contentMessage.indexOf("ru") == 5)
        tts.other(
          contentMessage.slice(prefix.lenght + 7, contentMessage.lenght),
          "ru",
          callback
        );
      else
        tts.vn(
          contentMessage.slice(prefix.length + 4, contentMessage.length),
          callback
        );
    }
    
    //c???p nh???t t??nh h??nh d???ch
    if (contentMessage == `${prefix}corona`) {
      const takedata = require("./corona");
      let callback = function() {
        var data = require(__dirname + "/src/corona.json");
        var nhiemtg = data.data.global.cases;
        var chettg = data.data.global.deaths;
        var phuchoitg = data.data.global.recovered;
        var nhiemvn = data.data.vietnam.cases;
        var chetvn = data.data.vietnam.deaths;
        var phuchoivn = data.data.vietnam.recovered;
        api.sendMessage(
          "Th??? gi???i: \n - Nhi???m: " +
            nhiemtg +
            "\n - Ch???t: " +
            chettg +
            "\n - H???i ph???c: " +
            phuchoitg +
            "\n Vi???t Nam:\n - Nhi???m: " +
            nhiemvn +
            "\n - Ch???t: " +
            chetvn +
            "\n - Ph???c h???i: " +
            phuchoivn +
            "\nTips: N???u b???n c?? d???u hi???u nh??: ho, s???t cao, s??? m??i, kh?? th???, ??au v??m h???ng h??y b??o ngay cho b??? y t??? v???i ???????ng d??y n??ng: 19003228, 0989671115 v?? 0963851919 \n Tips: ????? b???o v??? s???c kho??? cho b???n th??n v?? cho m???i ng?????i xung quanh, tuy???t ?????i tr??nh ra kh???i nh?? khi kh??ng c???n thi???t, n???u th???y b???n th??n hay ng?????i xung quanh c?? c??c tri???u ch???ng c???a b???nh vui l??ng b??o ngay ?????n c??c c?? s??? y t??? g???n ???? ho???c g???i ??i???n cho ???????ng d??y n??ng c???a b??? y t??? ???? ????? c???p b??n tr??n! #stayhome ",
          threadID
        );
      };
      takedata.take(callback);
    }
    
    //tu??? ch???n
    if (contentMessage.indexOf(`${prefix}choose `) == 0) {
      var input = contentMessage
        .slice(prefix.length + 7, contentMessage.length)
        .trim();
      if (input.lenght == 0)
        return api.sendMessage(
          `Nii-chan kh??ng nh???p ????? th??ng tin k??a :(`,
          threadID
        );
      var array = input.split(" | ");
      var rand = Math.floor(Math.random() * array.length);
      var output = array[rand];

      api.sendMessage(
        `hmmmm, em s??? ch???n gi??p nii-chan l??: ` + output + `.`,
        threadID
      );

      return;
    }

    //detect ch???i bot
    if (
      contentMessage.indexOf("$??cm") > -1 ||
      contentMessage.indexOf("$Bot") > -1 ||
      contentMessage.indexOf("$bot") > -1 ||
      contentMessage.indexOf("$??i???m") > -1 ||
      contentMessage.indexOf("sumi") > -1 ||
      contentMessage.indexOf("Sumi") > -1
    ) {
      if (
        contentMessage.indexOf("ngu") != -1 ||
        contentMessage.indexOf("c???c") != -1 ||
        contentMessage.indexOf("??c") != -1 ||
        contentMessage.indexOf("ch??") != -1 ||
        contentMessage.indexOf("??m") != -1 ||
        contentMessage.indexOf("m???") != -1 ||
        contentMessage.indexOf("?????t") != -1 ||
        contentMessage.indexOf("s???a") != -1 ||
        contentMessage.indexOf("s??c v???t") != -1 ||
        contentMessage.indexOf("nh?? l???n") != -1 ||
        contentMessage.indexOf("????") != -1 ||
        contentMessage.indexOf("cave") != -1 ||
        contentMessage.indexOf("l???n") != -1 ||
        contentMessage.indexOf("?????t m???") != -1
      ) {
        const gud = require("./music");
        let callback = function() {
          let up = {
            body: "",
            attachment: fs.createReadStream(__dirname + "/src/music.mp3")
          };
          api.sendMessage(up, threadID);
        };
        var myArray = [
          "https://www.youtube.com/watch?v=fMW1pmDjdH0",
          "https://youtu.be/VYjTNW3zGhA",
          "https://youtube.com/watch?v=hoo02dFNEYA"
        ];
        var rand = Math.floor(Math.random() * myArray.length);

        var concat = myArray[rand];
        gud.youtube(concat, callback);
        return;
      }
    }

    //waifu
    if (contentMessage === `${prefix}waifu`) {
      var route = Math.round(Math.random() * 10);
      if (route == 1) {
        api.sendMessage("D??? em s??? l??m v??? anh <3", threadID);
        api.sendMessage("Y??u ch??ng nhi???u <3", threadID);
        return;
      } else if (route == 2) {
        api.sendMessage("L??m B???n th??i nh?? :'(", threadID);
        return;
      } else if (route == 3) {
        api.sendMessage("D??? em s??? l??m v??? anh <3", threadID);
        api.sendMessage("Y??u ch??ng nhi???u <3", threadID);
        return;
      } else if (route > 4) {
        api.sendMessage("-.-", threadID);
        api.sendMessage("Ch??ng ta ch??? l?? b???n th??i :'(", threadID);
        return;
      }
    }

    //hack code
    if (event.body == `${prefix}ddosfakyoubitch`) {
      api.sendMessage(
        {
          body: "Hacked by CATALIZCS",
          mentions: [{ tag: "0x80f700", id: senderID }]
        },
        threadID
      );
      return;
    }
    
    //ramdom con s???
    if (contentMessage == `${prefix}roll`) {
      var roll = Math.round(Math.random() * 100);
      api.sendMessage("UwU Your Number is " + roll + " ", threadID);
      return;
    }
    
    //t??? hu??? 100
    if (contentMessage == `${prefix}tuhuy`) {
      api.sendMessage(`T??? hu??? 100`, threadID);
      api.removeUserFromGroup(`${api.getCurrentUserID()}`, threadID);
      return;
    }

    //t??t ch???t m??? ch??ng n??
    if (contentMessage.indexOf(`${prefix}t??t`) == 0) {
      for (var i = 0; i < Object.keys(event.mentions).length; i++) {
        var x = contentMessage
          .slice(prefix.length + 5, contentMessage.length)
          .trim();
        api.sendMessage(
          {
            body: x + " V???a B??? V??? V??? M???m \n",
            mentions: [
              {
                tag: x,
                id: Object.keys(event.mentions)[i]
              }
            ]
          },
          threadID
        );
      }
      return;
    }

    //detect khen sumi
    if (
      contentMessage == `Sumi kh??n` ||
      contentMessage == `Sumi kh??n.` ||
      contentMessage == `sumi kh??n`
    ) {
      api.sendMessage(`D??? em c??m ??n nii-chan <3<3<3<3<3<3`, threadID);
      return;
    }
    
    //Khi???n bot nh??i l???i tin nh???n b???n
    if (contentMessage.indexOf(`${prefix}echo`) == 0) {
      let echotext = contentMessage
        .slice(prefix.length + 4, contentMessage.length)
        .trim();
      api.sendMessage(`${echotext}`, threadID);
      return;
    }

    //nhentai ramdom code
    if (contentMessage == `${prefix}nhentai -r`) {
      let ramdomnhentai = Math.floor(Math.random() * 99999);
      api.sendMessage(
        `Code l?? t?????ng c???a nii-chan l??: ${ramdomnhentai}`,
        threadID
      );
      return;
    }
    
    //to??n b??? l???nh ??? ????y
    if (contentMessage == `${prefix}help`) {
      event.isGroup &&
        api.sendMessage(
          `     Danh s??ch to??n b??? l???nh c???a Sumi-Chan: \n
\n
  \\\\\ L???nh d??nh cho d??n th?????ng \\\\\ \n
\n  
  prefix : Ki???m tra prefix (default l?? !)\n
\n  
  em ??i || @K???o S???a : Ping bot\n
\n  
  ${prefix}lenny : ( ???? ???? ????)\n
\n  
  ${prefix}hug : (??? ???? ???? ????)???\n
\n  
  ${prefix}mlem : ( ???????? ????)\n
\n  
  ${prefix}say <text> : bot xu???t ra ??m thanh\n
\n
  ${prefix}play <???????ng d???n> : ph??t video, L??u ?? link ph???i thu???c d???ng: https://youtube.com/ \n
\n
  ${prefix}choose <input 1> | <input 2> : ch???n ng???u nhi??n trong t???t c???, c?? th??? l??m d??i ra v?? d??? nh?? <input1> | <input2> | <input3> | <input n+1> \n
\n  
  ${prefix}echo <text> : bot s??? n??i l???i y chang b???n v???a n??i\n
\n  
  ${prefix}corona : ki???m tra t??nh h??nh d???ch covid-19 (realtime)\n
\n  
  ${prefix}weather <city> : ki???m tra th???i ti???t, l??u ?? ph???n city ph???i ????? l?? t??n th??nh ph??? kh??ng d???u, kh??ng vi???t hoa!\n
\n  
  ${prefix}waifu : th??? v???n may c?? h???t ???????c sumi-chan kh??ng (??a s??? l?? kh??ng "/)\n
\n  
  ${prefix}roll : l???y con s??? may m???n c???a b???n\n
\n  
  ${prefix}t??t <@ ng?????i c???n t??t> : t??t ho???c v??? ng?????i m?? b???n nh???c\n
\n  
  ${prefix}osuinfo -u <username> : l???y th??ng tin t??? username osu! c???a b???n\n
\n  
  ${prefix}music <url youtube> : ph??t nh???c ??? chat, l??u ?? s??? d???ng link c???a https://youtube.com/, t???t c??? link kh??c ?????u kh??ng ho???t ?????ng\n
\n  
  ${prefix}rank : ki???m tra level c???a b???n, ho???t ?????ng ??? multi group!\n
\n  
  \\\\\ L???nh kh??ng ph?? h???p cho n??i l??m vi???c(NSFW) \\\\\ \n
\n 
  ${prefix}nhentai -r : l???y con s??? sauce may m???n c???a b???n\n
\n  
  ${prefix}nhentai -i <id> : l???y to??n b??? th??ng tin truy???n c???a b???n\n
\n  
  ${prefix}jav : l???y code may m???n c???a b???n\n
\n  
  \\\\\ Admin Commands: call admin at https://fb.me/Cataliz2k \\\\\\ \n
\n
  ${prefix}ban <@ ng?????i b???n mu???n ban> : khi???n cho ng?????i d??ng ?????y kh??ng th??? s??? d???ng bot\n
\n  
  ${prefix}unban <@ ng?????i b???n mu???n unban> : khi???n cho ng?????i d??ng c?? th??? s??? d???ng bot\n
\n  
  ${prefix}ban thread : khi???n cho chat ???? kh??ng th??? s??? d???ng bot (??p d???ng cho to??n b??? th??nh vi??n)\n
\n  
  ${prefix}unban thread : khi???n cho chat ???? c?? th??? s??? d???ng bot (??p d???ng dho to??n b??? th??nh vi??n k??? c??? ng?????i b??? ban)\n
\n  
  ${prefix}adduser <id> : th??m th??nh vi??n v??o nh??m\n
\n  
  ${prefix}kick <@ ng?????i b???n mu???n kick> : xo?? th??nh vi??n ra kh???i nh??m\n
\n  
  \\\\\ c??c l???nh ngo??i l??? ph???c v??? cho AI bot \\\\\\ \n
\n
  sumi ngu, bu???i, vv : bot s??? dizz b???n kh??ng th????ng ti???c\n
\n  
  sumi kh??n : bot s??? c??m ??n b???n thay l???i c??m ??n c???a m??nh :3\n
\n  
  ch???i th??? : s??? b??? bot nh???c ch???nh s???a l???i c??i n???t c???a b???n "/\n
\n  
  \\\\\ Credits \\\\\ \n
\n
  contact me at: https://fb.me/Cataliz2k\n
\n
  Sumi-chan Source code open at: https://github.com/roxtigger2003/Sumi-chan-bot\n
\n
  \\\\\ C??m ??n v?? ???? tin t?????ng bot c???a t??? <3 | n???u c?? l???i g?? xin vui l??ng b??o c??o ??? link contact tr??n c???a m??nh nha <3 \\\\\ \n
\n
`,
          senderID
        );

      api.sendMessage(`check inbox ??i nii-chan!`, threadID);
      return;
    }

    //jav code
    if (contentMessage == `${prefix}jav`) {
      var ran = Math.floor(Math.random() * javcode.length);
      api.sendMessage(javcode[ran], threadID);
      return;
    }
    
    //l???y th??ng tin osu!
    if (contentMessage.indexOf(`${prefix}osuinfo -u`) == 0) {
      var username = contentMessage
        .slice(prefix.length + 11, contentMessage.length)
        .trim();

      osuinfo(username);
    }

    //nhentai search
    if (contentMessage.indexOf(`${prefix}nhentai -i `) == 0) {
      let nhentai = require("./nhentai-search");
      let linknhentai = contentMessage
        .slice(prefix.length + 11, contentMessage.length)
        .trim();
      api.sendMessage(`link: https://nhentai.net/g/${linknhentai}`, threadID);
      nhentai
        .get(
          contentMessage.slice(prefix.length + 11, contentMessage.length).trim()
        )
        .then(res => {
          if (!res.error) {
            let tags = "";
            res.tags.map(e => {
              tags = tags + e + ", ";
            });
            api.sendMessage("title: " + res.title, threadID);
            api.sendMessage(
              "pages: " + res.pages + "\nfavorites: " + res.favorites
            );
            api.sendMessage(
              "tags: \n" + tags.slice(0, tags.length - 2),
              threadID
            );
          } else api.sendMessage("l???i, id kh??ng x??c ?????nh ????", threadID);
        });
      return;
    }
    
    //ph??t video
    if (contentMessage.indexOf(`${prefix}play `) == 0) {
      if (contentMessage.indexOf("https://www.youtube.com") == 6) {
        const playvideo = require("./playvideo");
        let url = contentMessage.slice(
          prefix.length + 5,
          contentMessage.length
        );
        api.sendMessage(` ?????i em m???t x??u em ??ang x??? l??... ${url}`, threadID);
        let callback = function() {
          let up = {
            body: "",
            attachment: fs.createReadStream(__dirname + "/src/video.mp4")
          };
          api.sendMessage(up, threadID);
        };
        playvideo.youtube(
          contentMessage.slice(prefix.length + 4, contentMessage.length).trim(),
          callback
        );
      } else {
        api.sendMessage(
          " ???????ng link kh??ng ph?? h???p, ???????ng link ph???i l??: https://www.youtube.com"
        );
      }
      return;
    }

    //ph??t nh???c
    if (contentMessage.indexOf("!music ") == 0) {
      if (contentMessage.indexOf("https://www.youtube.com") == 7) {
        const music = require("./music");
        api.sendMessage(" ?????i em m???t x??u em ??ang x??? l??...", threadID);
        let callback = function() {
          let up = {
            body: "",
            attachment: fs.createReadStream(__dirname + "/src/music.mp3")
          };
          api.sendMessage(up, threadID);
        };
        music.youtube(
          contentMessage.slice(prefix.length + 6, contentMessage.length).trim(),
          callback
        );
      } else {
        api.sendMessage(
          " ???????ng link kh??ng ph?? h???p, ???????ng link ph???i l??: https://www.youtube.com ",
          threadID
        );
      }
      return;
    }

    //rank
    if (contentMessage == `${prefix}rank`)
      api.getUserInfo(senderID, (err, result) => {
        if (err) return modules.log(err, 2);
        const { name } = result[senderID];

        Rank.getPoint(senderID)
          .then(point => createCard({ id: senderID, name, ...point }))
          .then(path =>
            api.sendMessage(
              { body: "", attachment: fs.createReadStream(path) },
              threadID,
              () => {
                fs.unlinkSync(path);
              }
            )
          );
      });
  };
};
