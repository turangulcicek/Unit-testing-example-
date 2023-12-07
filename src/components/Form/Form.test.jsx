import { render, screen } from "@testing-library/react";
import Form from "./Index";
import userEvent from "@testing-library/user-event";
import user from "@testing-library/user-event";
import { expect } from "vitest";

// formun bileşenine diğer bileşenlerden farklı bir test yapacağız
// form gönderilince tabloya eklenme kontrolünü yapamayız
// ! Form bileşeni görevini doğru şekilde yerine getiriyor mu?
// bütün inputlar girilince formu gönderince "addUser" fonk. çalışıyor mu?
// addUser fonksiyonuna doğru parametreler gönderiliyor mu?

const testUser = {
  name: "deneme",
  email: "deneme@gmail.com",
  age: "24",
};

test("form gönderilince adduser doğru parametreleri alarak çalışıyor mu", async () => {
  //   mock : fonksiyonları taklit etme
  //  ne zaman çağrıldı, hangi parametreler ile çağrıldı gibi testleri yapmammızı sağlar
  // orj fonksiyonu simüle eder
  const mock = vi.fn();
  user.setup();

  render(<Form addUser={mock} />);
  //   gerekli elemanları çağırma
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const ageInput = screen.getByLabelText(/age/i);
  const submitBtn = screen.getByRole("button", { name: /add user/i });
  //   name inputunu doldur 1. yol
  await user.click(nameInput);
  await user.keyboard(testUser.name);
  // email inputunu doldur 2. yol
  await user.type(emailInput, testUser.email);
  // yaş inputunu doldur

  await user.type(ageInput, testUser.age);
  // formu gönder
  await user.click(submitBtn);
  //   form gönderilince addUser fonk. çağırılı
  expect(mock).toBeCalled();
  //   fonk. çağrılırken doğru argümanlar gönderiliyor mu
  expect(mock).toBeCalledWith(testUser);
});
