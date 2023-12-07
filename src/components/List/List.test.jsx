import { render, screen, within } from "@testing-library/react";
import UserList from ".";
import { users } from "../../constants";
import { expect } from "vitest";
it("gönderilen her kullanıcı için ekrana tablo satırı basılır", () => {
  // prop olarak bir değer alan bileşeni test etme
  render(<UserList users={users} />);
  // users tablosu içindeki bütün satırları al
  const body = screen.getByTestId("table-body");
  // belirli bir kapsayıcı içindeki elemanları seçme
  // body içindeki bütün satırları al demek
  const rows = within(body).getAllByRole("row");
  // kullanıcı sayısı kadar satır var mı
  expect(rows).toHaveLength(users.length);
});

it("her bir kullanıcı için isim, email ve yaş değerler tablo hücresi olarak ekrana basılır", () => {
  render(<UserList users={users} />);
  // her bir kullanıcı için ekrandaki tablo hücrelerinde isim, mail ve yaş değerleri yazıyor mu?
  for (const user of users) {
    // kullanıcnın adını içeren tablo hücresini al
    const name = screen.getByRole("cell", { name: user.name });
    // kullanıcnın mailini içeren tablo hücresini al
    const mail = screen.getByRole("cell", { name: user.email });
    // kullanıcnın yaşını içeren tablo hücresini al
    const age = screen.getByRole("cell", { name: user.age });
    // hücreler ekranda mı?
    expect(name).toBeVisible();
    expect(mail).toBeVisible();
    expect(age).toBeVisible();
  }
});
