import React from 'react';

export const Footer = () => {
  return (
    <div className="apge-footer">
      <footer class="page-footer">
       
        <div class="footer-copyright">
          <div class="container">
            {new Date().getFullYear()}
            <a class="grey-text text-lighten-4 right" href="#!">
              Abbos
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
