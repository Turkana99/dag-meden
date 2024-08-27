import { Component } from '@angular/core';

@Component({
  selector: 'app-danger-objects',
  templateUrl: './danger-objects.component.html',
  styleUrl: './danger-objects.component.scss',
})
export class DangerObjectsComponent {
  displayedColumns: any[] = [
    {
      key: 'person',
      name: 'Hüquqi(fiziki) şəxsin adı',
    },
    {
      key: 'voen',
      name: 'Vöen',
    },
    {
      key: 'phone',
      name: 'Telefon nömrəsi',
    },
    {
      key: 'dpoName',
      name: 'TPO-nun adı',
    },
    {
      key: 'objectName',
      name: 'Obyektin təyinatı',
    },
    {
      key: 'dopAddress',
      name: 'TPO-nun yerləşdiyi ünvan',
    },
    {
      key: 'note',
      name: 'Qeyd',
    },
  ];

  ELEMENT_DATA: any = [
    {
      person: 'Məmmədov Nazim Mürvət',
      voen: '10000093201',
      phone: '055 222 22 22',
      dpoName: 'Tikinti işləri sahəsi',
      objectName: 'Yaşayış binları/Çoxmərtəbəli çoxmənzilli yaşayış binası',
      dopAddress: 'Cəlilabad rayonu Qarazəncir kəndi',
      note: 'xxxxxxxxxxxxxxxxxxxx',
    },
    {
      person: 'Səfərov Azər Cəlil',
      voen: '10000093201',
      phone: '055 222 22 22',
      dpoName: 'Spirtli və alkoqollu içkilərin istehsalı sahəsi',
      objectName: 'Yeyinti sənayesi/Spirt və spirtli içkilər istehsalı',
      dopAddress: 'Xaçmaz rayonu Bakı pr 142',
      note: 'xxxxxxxxxxxxxxxxxxxx',
    },
    {
      person: 'Heydərov Elnur Kamran',
      voen: '10000093201',
      phone: '055 222 22 22',
      dpoName: 'Qayalı market',
      objectName: 'Ticarət müəssisəsi/İri ticarət mərkəzi',
      dopAddress: 'Şəki rayonu Baş Göynük kəndi',
      note: 'xxxxxxxxxxxxxxxxxxxx',
    },
    {
      person: 'CONCO QAPALI SƏHMDAR CƏMİYYƏTİ',
      voen: '10000093201',
      phone: '055 222 22 22',
      dpoName: 'Çıraq hotel',
      objectName: 'İctimai iaşə və xidmət obyekti / Mehmanxana',
      dopAddress: 'Kürdəmir rayonu Atakişili kəndi',
      note: 'xxxxxxxxxxxxxxxxxxxx',
    },
    {
      person: 'Mərdanlı Şamxal',
      voen: '10000093201',
      phone: '055 222 22 22',
      dpoName: 'Təhsil kompleksi',
      objectName: 'Təhsil müəssisəsi / Tam orta məktəb',
      dopAddress: 'Nəsimi rayonu (Bakı şəhəri) Vaqif pr 9A',
      note: 'xxxxxxxxxxxxxxxxxxxx',
    },
    {
      person: 'AĞASİYEV MƏMMƏD RƏSUL',
      voen: '10000093201',
      phone: '055 222 22 22',
      dpoName: 'Yanacaqdoldurma məntəqəsi(Şəki)',
      objectName: 'Yanacaqdoldurma məntəqəsi',
      dopAddress: 'Nəsimi rayonu (Bakı şəhəri) ',
      note: 'xxxxxxxxxxxxxxxxxxxx',
    },
    {
      person: 'HÜSEYNOV BƏHRUZ BEHBUD',
      voen: '10000093201',
      phone: '055 222 22 22',
      dpoName: 'Yaşayış binası',
      objectName: 'Yaşayış binları/Çoxmərtəbəli çoxmənzilli yaşayış binası',
      dopAddress: 'Cəlilabad rayonu Qarazəncir kəndi',
      note: 'xxxxxxxxxxxxxxxxxxxx',
    },
    {
      person: 'Heydərov Elnur Kamran',
      voen: '10000093201',
      phone: '055 222 22 22',
      dpoName: 'Qayalı market',
      objectName: 'Ticarət müəssisəsi/İri ticarət mərkəzi',
      dopAddress: 'Şəki rayonu Baş Göynük kəndi',
      note: 'xxxxxxxxxxxxxxxxxxxx',
    },
    {
      person: 'CONCO QAPALI SƏHMDAR CƏMİYYƏTİ',
      voen: '10000093201',
      phone: '055 222 22 22',
      dpoName: 'Çıraq hotel',
      objectName: 'İctimai iaşə və xidmət obyekti / Mehmanxana',
      dopAddress: 'Kürdəmir rayonu Atakişili kəndi',
      note: 'xxxxxxxxxxxxxxxxxxxx',
    },
    {
      person: 'Mərdanlı Şamxal',
      voen: '10000093201',
      phone: '055 222 22 22',
      dpoName: 'Təhsil kompleksi',
      objectName: 'Təhsil müəssisəsi / Tam orta məktəb',
      dopAddress: 'Nəsimi rayonu (Bakı şəhəri) Vaqif pr 9A',
      note: 'xxxxxxxxxxxxxxxxxxxx',
    },
    {
      person: 'AĞASİYEV MƏMMƏD RƏSUL',
      voen: '10000093201',
      phone: '055 222 22 22',
      dpoName: 'Yanacaqdoldurma məntəqəsi(Şəki)',
      objectName: 'Yanacaqdoldurma məntəqəsi',
      dopAddress: 'Nəsimi rayonu (Bakı şəhəri) ',
      note: 'xxxxxxxxxxxxxxxxxxxx',
    },
    {
      person: 'HÜSEYNOV BƏHRUZ BEHBUD',
      voen: '10000093201',
      phone: '055 222 22 22',
      dpoName: 'Yaşayış binası',
      objectName: 'Yaşayış binları/Çoxmərtəbəli çoxmənzilli yaşayış binası',
      dopAddress: 'Cəlilabad rayonu Qarazəncir kəndi',
      note: 'xxxxxxxxxxxxxxxxxxxx',
    },
    {
      person: 'Heydərov Elnur Kamran',
      voen: '10000093201',
      phone: '055 222 22 22',
      dpoName: 'Qayalı market',
      objectName: 'Ticarət müəssisəsi/İri ticarət mərkəzi',
      dopAddress: 'Şəki rayonu Baş Göynük kəndi',
      note: 'xxxxxxxxxxxxxxxxxxxx',
    },
  ];

  logData($event: any) {
    console.log('event', $event);
  }
}
