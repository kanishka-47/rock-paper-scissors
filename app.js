
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rock Paper Scissors Game</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Rock Paper Scissors</h1>
    <div class="choices">
      <div class="choice" id="rock">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAADjCAMAAADdXVr2AAAAjVBMVEX///8AAAD+/v7t7e3s7Oz6+vr09PT39/fx8fH7+/vf39+qqqqioqLDw8PY2NiHh4e0tLSUlJQ8PDybm5vKysoxMTHb29u3t7e9vb1xcXHS0tLIyMgbGxt8fHxiYmJqamooKChUVFR/f39ISEgUFBSOjo5kZGRRUVFubm4XFxcvLy8jIyNKSko5OTkLCwvB5RxpAAAafElEQVR4nO1diXbjqBJVkISQvMdOYjuxEztrZ/v/z3sGia0oFtlOd8+8qXO6IwNCdQXUBoKMHChj+YFoxq+Lw1UhEilPZDwxE4nl4TKrdCLMr0E+r7SoeGLJ83ORaOTnWL7ghCeSuuXETs3aVP18g+naZkpUkCl4hQOvAPAEezoxlt+yz6sqNU/+fA2v5aRWnBhvihjwINO1zdR/8P758ASx4kCUXxF+dejxB6L8iol8kVjyq4pftXfB/Frlt4k5v6z4VSnys5R8zUmtOWlTK52axDRPzRinqjxQxa9ofbiqqZ3IeGIpEim/Kpk3v9L5pfemWH6lEmumi8JU8PwaPp8XbbtIKxQPjVl0Qq+whFqhE3lnyNrO4M+v7R5eGD04ll8DTvJcpcKimukcMN3Wz4t28MCw0H299Pd1OKywYeMMUDQfDiAwQJ1hpZkmFRi2eoDm/xfwMKkRGfXtUI7lo/IJSo0k+dSmxkQdlD+iKOVUCdKXaGLlTTzhpqRK0x4FE/n1v0gxwCYWiuFfrtb/L+AVHnionjHgWSoLZR8oR3++obwS4RUeeAWAR7jCz6lIy/llLRL5pUgkIrEVxPySqZtC+fwib1tHJ8bydaLBCSyag+dDptuqeCqUClAxBIby8YohkI8rhiRRhyqGf7ta//3wMtGZ23aohYJqm+SfD4/xHkXy9XIwfN6vVqu3+/v71WR+c9vQg4HBzg/v9409Rmmxvpm9XX5fYPSwnY3a28859k6QnJF8Q9wxWrHxzeQTxWXS52zNKEuUnDnCdAUkp+hCP6n3OI0Hbw9RaLIVJ2PC3/r59N7PWS15ndWLSTK0ji6nJMv+dqOM5Yw205ee0DqasLb1T4WXrpH7egxVM9gdh60F2ND8dI/heH8qlF+V5e39CdgEzev6ZH/vJ7z1jDazuyDnj/f72WB6sxwtb6aD+f7lEi31dd1WeoK3fna1fqDbnRfX19t81LQ9zqZiNHt0i08Y+6usliqrBh5B+XE/XFMEmCY62sBG/xrTM8CTKu3UOCctZqhN8vQ2bYLIJJERHLJLekqcE4sNl8dFqWlZTDBsl/NxCjB5wYb27fM6KUrtMC2i1HpUnqoYMoaBex2wpGazaGB1gecT5hjOpdYp1nKXw9zbSMEWrJ/NaiblH7ZaWD53wU3ShhtOjSlHJ9UfhUdvHGn5uSwjTYYlmmnmC5vRHzfKoFOo85sdBLdBG44YAAKdVBYbGxVO6XFjD+W8jzvLij0EN7PVm4PEhUjMC/WDvus6mz9itdR0CTTx07CGbIblSSC71A7wRw1dyd9gtWQUaOGnQR1gl2gwbpOiY1Hje8vy3wwvyxag6QbhZoqR3eYiRQvQKT0CHtqNUz2GjQ3uucyi1HLPY3/+HkuMP+WTHn55/7FXqll3w94yZvVrxAhqE8n4wwJ3n1ssW/KDwNTR0gEEmk521kY9YJUFVx2UNn8iNUOtZYKZsPasfpbZpuHXOtYY+ie/+3bLIHTPDVP1jHWWhUJJgOlUtc77Eu2iynKAZtnKM+giUlIVai6m/pdhVaKk16MN7yxWy4GRwer169ev99fNtBBFD4n5lwluy2zuTG69cJuLz8KG5UoWkVApA3vUG54gnwGQs7J5/mX1wUFBD7evraabmsgcfAok5D7/vhiqQqFGX8oHXfUJJfGiWShKVJHF7gLS96A0hgNvOscrwABiP9jdxWOS2f2qmq9OD23xy2AoqcCDlK8zfNQlEGgjdpC9s4TblPR87CaTTjfKGEF8HIfejbcfVWQucXxXfpmr6E0+b3Emq4Ve48E5m96S7UoP5VxrvzG0AqndidF89yeFkhQ8epMArpMMqaoApUKYdfNIqUwNkxxhOgCPoXNXZUrHvIC9ymMxk4B0afvnwSG4kTk4QiWq55x/nGljwo11qd0jgIzNrFDHxdNmOc7z6xvbO3goUEZcwJECrPXqvkb2LeBWaVpfsZNDSdQylR9H6hlU27cXn1UcXRpS2pkIVzeBm5QuWrATrRZq2lsPt8bTDL986wNBpI5GRQWRhcwCymv9nuW+d1HKB+/pafAqM6JnaSVjQN4HXnSAfIWU4L/YdiEop6TsUXe9Wk+Q2Y2p4Ql8W8JjpDM2Pt5DIEN5pvuxGmH9XgmXBWvH3gFJ2lJxUwiZ5uSlFRK6jqBzwMTgWvb22gpMP84WTnBbBgYm3IM5uDB1C5L6FnExgug9bZ5f7Gqz9kqLlTc/JPuv+8NPbHth0xWfKzNesJTmH+Pp5OX16uPXr7ur1/vJYM0tsUSrpdJm5s5+/E4PD4Px42wVnFBL4ulyu3meD6Y3I78q3g15d02Ax7Qv8Go/Ww+OS8eJ62ts+sqX6ARTEj1OywqFZxrfeaG65pcdFtIRj48qjAhH4lcVFhUblPkk2jc0dzwGy0nK9OsDJsmVyvA5aHC8EU8gJUJuzDudJpRAf08wIBUDVSVH9kO1kbZEmTKBEQcogh/kmvdUU2SSPY3uRqI3ilhQ662bal1bJW8WB0bX3Hv4dNmOJAYrYQMoRlPpja818FgthSoF9Kp6nV89EVnZ/eTMevjygSII0/s1s6wWI2SoxvXQfpKW2H0nJI9t6I6KxWCy/XIgfO4Hy3FTFM14NNg4XveIGnFOY6mAarwH8GQ1kTDHuTiKfa8YdURSzZr1Yjkdzmez5+f9cAxC/WwJevKy1lFqHZXRIw84JgOZfimf78TtoHxAxYhr0/iDoJ46PESHlkm3YEgoSYnNK3CzaryErnlOK6YXDUx8Y+ZaLaoAaDxlyMQN6QRVdyz+6H3MiFreFcyBJzX3E7hPafRYuNZhxWAp2A17E24TGg24pXCpuPJ35nYFtzJ9kvZkBIftnatrVw/6bXS8PPhh+HJDWmiP6jAUdXwFCKadTD9idVF/gujQl+V9Cdr8uKAglCTTV/YdSlukuLDHUT917xYy5LheK7Ky5ve0JwSCl2o+obGqTHt03EXokZtUWE0mHfg14FGpGh9AeemjvyJ1xZ+ODxcjZIbwSlpLKlRtgNQYW2U6lJSrXgsMEzVaw55CX8FIrEtfI/tcDeK5Fj+UgueRpm49pxaqhX2PfBnfPZn+MYo+Q3XPWaZ3HZDy8RMUlu8iTSug3PQFfaIZnkkb+52XE/BqJiGDyciFTL/uyWOEFWRkJtyl8qzeCeu60Tx38HSL5qoKQbJvPujqivu7u8/9cOGZQHF8dQSLMaaQ4eVcOzaB+5wuS6TVssfNsy6UpILgIPhHpDWtY/Ha5b34enkejJqi94g7stESCxLVJhxMG3qRgEHfVHJT900kSvB9tdtM5oPlaD1uGK3ibnskx2OpYDlOV+H/5GTBL7nrgIJR2LeowLCuwkUH6e7qcTdPnB07g6x1dafy7JpOrcsA8BV4pnQWtNys4/BajKwH67ptjNkzyzdOqUuXkSufR93niXLdyLNdjxpnhqG2S8Tnmf/LElssZs4Fe6vkcdoGXVSPW9hllR1qpF1fJBJzWUhwBzzkrwMjOf06OPBQ11q7VXZHkHPp1lzlODHIWkhuMIaSzXLUKg1UItJkrH1IuTvLpASBJovkFCzdY+Pp8zb2weh3nXnJ5SsGF9eFPpIxsYEIJVE5tT2zq1JmNqrBq2IxfV59/nKRtW8O8IW+/eN0iN+b6HJk55wKeEqCLOxbpZn9HmaiaNbLwfx5tX19fFdgsYioTxwk8d6Hdh0TIw6PqaEHvq6TQ2/fo+a6osV4sfB+p4c7gEihNJh4KTlw1nxxnfqg7BGUkqhjk0IJPPjdWsw8PpGUfyCmGFRXBa1UGKVQ7jyEvPujfe/Yc1CSRtkdE8pJzlFM7XukF/Hhq+ZcrIXEzzGkTOrqYJQZJpr9BKk9Vt56wuRwfRr3QDcQt9N3pByiGeXwpB3yXdr1SPV94pclOJuIGRJyJfq8GeXOrhkfVtL0erSfUMlSKR++Wizq+efIMDT9WXUHCVs6aI6VqIIRfHUWVd9xbuy7lVL3fzmTZiihZm9PjZ1E7c1q0mBG+K4DdGd2Ql2/bOPLvvX35hNtFjhgkxQmJ2UtirhzTqVTZ7kLJCBZApV7s6SKI9Kfi1uO/tpDt6mo+kvVLtuRvwv7PqtR0x6rfxzJ9+mqQftr43YttRpjgC+5LMGec1h+3u0G0sT2m8kEJMo/BO+JWiYFOE8xWUu1mOKlEvCotDhBIELNGFk2S9djv2a4OD2TXj6e9MeaDW13HZAmjIoBtjzK6NIv827zW+TVEp/w8ysCNf6QYm5O1P4k+p8squefD76dmN9Tbg+Yv5Pa0HJxra9rDkJ1Nk5oL5JpiWLgREodTR1KvVKfr1psl+1ItQc8NInEsrPt9f9tHx+kL+U5UnF4blJN3SVXr5qrJpOrkrTnbo16Gbe2FiiNIDhBd/chiL9rPJorP0aZWnQl3SG13KPl51KVNMm/kdpu5vdh7ZpxsXoakakZ+3lu0/jYo7JJb+0bZFjBnhqqVxcButpMx2YEyTAfcYGT6BZGiI5srlaZsVxVOga2qFdeEmwSuozsYPU5uVGbIQUsK7+B3IfYerCCa+buM2OxcSWd2cZ6nrJlsErXk/eLMD0aGIN0NEpS3M5XWDRyk1nwZJHGeohUe3B9maSULdYe94kYAVjr0q2gbEbDjT+W3PjgZYYudZS9S9Uo2ogHep2M4I1hu9u+MgGz8XI42UXXsM7NpeKZZNFetyK1+r33aYKKm018f8M78P12DCpIq5r1dL7fuatWfbQtjV0H5G22iJTBwX0WpWK5jzz6LjbCfDnX8/t0VJpeRTds9Z7sxbZn4LFlfMRuZ7vA85Y2ikTXlOewxWyH78Yaom2mrBZphi6tZxmzEKlUjqebK/xxyEvCeyWKlTTL511gz8Gr7fNguHoykzYKnowK2kCMWYgQQw7R8QDBCCKoTlW4t2f/pM1oOtu/bV8vOT3utm/75+HNomGy2HplP7H9jkF2Q/vzeGlyut97JlA1BgvUE/ZxcfH014aN8dCiFF+hMGmK2rPFVpfVVIxuK/1s1FuXVF9PJcY+ocTTSH+CtKuEYmAy1i6mudRSPLm+w1ZawlkHHzloQtQHWw8ngV30PO8I1tKD9EdQI7H/DFPBF8u6ROF1Cyi+0NZwwMXloxWYSflaM0yiBrXu5rKNlDFpBlj9EMITj1ZvZkMDnKT44oiMJHrXE99tBP6P9BdibO7CW6/adT9XZrl7BLOaNwv10CCqUGooow+pydhdRrh3ptxccyURJjkrA97FA9gkwOYzkVHX7TutcwpS3XPMvwDXkwlLo3q1NMS8396+ZddnU1FU0x3Jv/zlMfVUOE9MgBEVd9gZlailIeaNFFjrb9iSCdwRT2PffBluBchwNa/UeJbxh8sWnvrq1wgIyVVmYBUuDJXtzSBvDFEy8EiJWAVqcWojVJLyzA0stkOkydmrcpOw70eQyfNG0nhtalnflPGl4kp2GqpPurNwtUSW3TwBgCvhSrnLo7xOIsaSVUPsFoIVMXSNlBETsWxHf6Kh7U4lb9yaayeYuxs5hXwQAiyHIMV1rFlC6oLL9vs9qrwN1XxKxxXI/YUTLPuYU5SPBBXvL4J1X9VwljCRmV0HUIZYB08JF21XSyEJwp8dIcsCt3jJnnSWkajMq+7jUq2wp/IJUjk+ex69dMNIT/6tjF1Ty5X9vl1sjETi645gnEvDrGl3HTC2JJMhF5liyxazyiniQH8ua5MPgvMA+IEocWjyh/1ewFvqLncdO6M2heVaYXeDTa0eD3xziQH8frY8jxNV2JEkTcpB9wUY0x+GdVa02psoaDwvsb3a0jUhKjTc3ATL3C5izHp1H7gZgYrHaVNVhRQeD2EOkU0SA0tFiL9T2li98tT6etzX+NKkHGRy14HCG4qKrXdsnF1WYhOafofCWVoQtjzxYsSAJ3cdqMaQSUkPEWYPHXlqz/tJV8Ir6HBk56C2Ft059a4D+NTrhbNSHOWomBm2mjuPeXYREjZj5EhbGt+t43sVcQosajfoFlGVAV5+RGgCxXBr7pVEF55l7Q6/HirE+TUTl3fnJ+aJusImBQlKUo401lZQzDUmW0oX9esFrieJzT8hluA7uSVBBZLvvP1+T+7on1cLFOBL72ekm/8JVrfHBfLeA90d64Sk4b2YJLjazkYqqNbXXCbGP5zhBH/w6DaVDt5X5W6ByPgBeJSVWc0qZYp+HOOMwWzrgiDXSHWun5jQo6Xg3FDPttu8EN8sUU32pEoXzTCuu7FedroMBZJKSsgB88Dr9oJk5h4FSY8Br9loI6KxEa8nYa9ilVzbllxAwrZFlTcw7mY3vPuwqr0WvEskzqK+0m2bFJLTRO+s0KdI1fpApvYAg+pwWesPnft8mK+aSfbSo7k2Q5/2ZktEt66ZbATTJ1kJNrB0zgAz1jhGd8c+nx1ygiAzNmtcZ9HDQmqmPLon62tmKO3iyszVFpn16jHp6JaEf8B9JKul8XuVxeGVTHsS/q999QP7t6AjSzHF0KM2pczmzgaW2FkoVHfPuVFL4qOjoBMqQfWlj/QsnbAk48dI1nqVa8h4IbDjpLAU6ZD+0t6cnRIspJK7DoQ36FaL4iO2tUaicRJ8yAUVP1H/+6xP4xL0I70JbJV6QJ3h6F6dTzr6yd/zQ2DFD/UB0cUs+agXYhzrkr5lkudFnPX9wMr0RmW/MhNe4YEn9aCO9wX383KFHtTEftbiGVEywimLbqE/qeuatCcW8cv2RKXaTiTM2N/MNa6T+Tmh5SyzzVOPsTP5nq8pUxtYxg+oM/enQ7n1uQJAmrrKGQoYoKWV6iZSGHnAmdt2P+Z5vwPqzMNrwqsEw8M/KeuIVq7NTbm/G2QDy/AJbsZyJjwy6KiwCE5oqKRiUmWNG0Ak+ZpFj3px4JnbCEVXeQYtyGPMN78gKkbPYC5unIED6pIOh6TGlKU1r9KxK8cT3AEvZploDR5DfHDUimY9upkOZ5PN6v7+ZfuKrEW+NpeKi73+ac5YTsVux3yv/7y2E0mXaEwHeYITZi87g4YjVXG9vj2geV5tH78eUlYdXzYHvomEkqb32oNZM2qsevd/rN/PjkRp8Pay3T0+wDUYCbQ6tENx5LmzGTMeuAstsSXIVR+w15P+68MP9HRL5Kg75ljdLDemya6OXbDjITD2ruevfhw4zU85Vle0Vm6uAwc7Ryk2vfz3BbwevsS/AunoThwIC89Cift7VmLJzOnmY3YZz8KawUnN14PJ1vMBgabVbVkDpsUJDJ23LvSeUAxcrHeKgRB5cmkrf0QTl+aSlh2FfJ3XAFWFynw8ms4nm4MAdaaRL2dr3nBMMS0VQw+1rk81sLcJXLRcSLdVboeRiFIry+4mvwFqEQ9XKj4GpajgTMfqgmWPPcLzfpRH3SV77MgJ7/kOqHPinCY8dXqrfSbrlTGV3o9frFRqmvGB6DVkuj3/Ux1QZ56YaxxgoBIZSCzLWxNfKICdgvNI5a+c1wpnut11gFO6YpCGaW6t17lbW0EjOEfSB0k6Vr3LaM8D6rxqnRjH6tonztzDT01Qu8VbBCkD3pAjc9RUwjA75VhdHB4xN/AW5J5A2r/T9blDfZ/Q/AS8g9S5thd13nnXvzj893Ff4c2yCmn+PmRHnxocPACc5hRskfE1shjxooMlnHAaQYtZZdSjhz6mxdhLd2eR89azBqzKfVwH4cXJE8FwknXorsmPOlbXq9ZlD66IowI5QP88BDTbTokLKkt7T/NjjtVNg0dK2jjn5k3PFEYJkH6mCIr9HLyCUWdR7t1cqgl8oj8+NCNF9dqiOW+8ADxUapjze8GxJ/JZ7p78tzG2oAhFM5VN7ZjiHqnCaace815rptGxp5cK0Lr7VL81wozENjIvlhLA9QVtflm4G51cTuERpPFIaBIVhoe7LgHTlUbS7jrQI5Rk291WPh0jh5evjNUGZ4ibtWTuqjOk5sGsmc3UiWrdzmd0vHMBfky8H/nFVTumG63vQzYH1WvAO6/VAvNJtsZOzXuYrLWv6nNbARDfkG2s9Ypv9IhjddOtFpDPbYMG32zo/gZG1RKFpJW2sPs/R2cyXQOmxK4D/tBR5U3055dZgWz2xelpM/XtTZM0LJsZ+PRzn0WYErsORBd+xBUDyC8HvrjW9242cjAGFICkag1nSbjCg0z/gFGGx2KyJSJGFcbXzeC2SD3NnE8AIeHcjwUt2pOci7BaPz+8A7GqmUc2Gnr/3MwGo3HjDeWz69Fw/4ovXt/nLO8DL/PAQ0NJEp43n1fPqutJ4hTIw+P2frWZTGacJvvN28su+G5em8pmOgCvO7G7rklrkLRLBYSVwhNLnQjXF8TyDz1rsfHtiH88caeytVIiTPPUDJUaqGKATqE/v008+GGMVutJNIDehx5vGPOIunOGkhLyu25/AD99O2o6y6V907KKyoIftlpQeK3PS+l4sDq1FVeLrNth7e+Cx8XrYVRmbDG/T57PsulxMuI9rpMaPeD95NhDdH/d3A4nW+ybTR+9b+eL5iAoorEfdOyJJSCtChHSlAi9xS/bF8+vcpEo/OJufQGWz0B+bd9E2ps6zq5vb4bPq9f3wP5cH5er2c1tw78Z0c9nuqoY00wLgCS13kvveZxGmS8Uh2jY5np9O1pOp4M5V3vz4WB6s1wurpvO0sqtfldYUitB7/2E1VL7B7CTn4vTDQWSgwnc2fpcF2sgzrDSTP8Ro6wPPH4J5QOQT6fAQ125kzyGoHyiWj5E5JchnxxXDmUa9Rgi/lxgKUHSUoNz39SzqAwliRd7uJIvXnSGopBSoX1bxFhfYOSrFy/zux7Uvk1irT+I5WtOasUJcVYFtHPpgOkaMF0XP2+UwQHqzzcGEBigzrD6+6yWPwXPVlmZ/DwRUVnBOGeey86plVOBKEd/fg44qRUn7qoAVA+jcU64KgAsFaA6EV1fEMuH6w96rE/QiYGiFBQ16hdR6n+EYkgKTP6mUNJfpdb/g+eD583/m+CFu/E/feylc3YWdzaWj3LicJ7E9O8IJf1ptf4fvH8FvNyBlwP2hdGlE2F+DfKF0HOMshzAg0aZ5CSD8HLHKANM1zZTAt7/AJfDva/KZ4t/AAAAAElFTkSuQmCC" />
      </div>
      <div class="choice" id="paper">
        <img src="data:image/png;base64,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" />
      </div>
      <div class="choice" id="scissors">
        <img src="data:image/png;base64,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" />
      </div>
    </div>

    <div class="score-board">
      <div class="score">
        <p id="user-score">0</p>
        <p>You</p>
      </div>
      <div class="score">
        <p id="comp-score">0</p>
        <p>Comp</p>
      </div>
    </div>
    <div class="msg-container">
      <p id="msg">Play your move</p>
    </div>
    <script src="app.js"></script>
  </body>
</html>
